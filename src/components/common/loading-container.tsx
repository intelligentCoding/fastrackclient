import { useDebounce } from '@/hooks/useDebounce'
import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Spinner } from '@/components/common/Spinner'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

const StyledOverlay = styled.div<
  HTMLAttributes<HTMLDivElement> & { overlayOpacity?: number }
>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 8;
  background-color: ${({ overlayOpacity }) =>
    `rgba(255, 255, 255, ${overlayOpacity});`}
  display: flex;
  align-items: center;
  justify-content: center;
`

interface ILoadingOverlayProps {
  overlayMessage?: string
  overlayOpacity?: number
}

export const LoadingOverlay: React.FC<ILoadingOverlayProps> = ({
  overlayMessage,
  overlayOpacity = 0.4,
}) => {
  return (
    <StyledOverlay overlayOpacity={overlayOpacity}>
      <div className="text-center flex flex-col items-center content-center">
        <Spinner />
        {overlayMessage && <p>{overlayMessage}</p>}
      </div>
    </StyledOverlay>
  )
}

interface LoadingContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'placeholder'> {
  children?: React.ReactNode
  loading?: boolean
  overlay?: boolean
  overlayMessage?: string
  overlayOpacity?: number
  placeholder?: React.ReactNode
}

/**
 * A simple component that wraps any React children with a spinner inside an overlay.
 *
 * For UX purpose, the overlay is debounced.
 * It will only start showing after 200ms when the loading is set to true.
 * So, the spinner won't blink for fast loading times.
 */
export const LoadingContainer: React.FC<LoadingContainerProps> = ({
  children,
  loading,
  overlay = true,
  overlayMessage,
  overlayOpacity = 0.4,
  placeholder = null,
  ...rest
}: LoadingContainerProps) => {
  const debouncedLoading = useDebounce(loading, 200)
  return (
    <Wrapper {...rest}>
      {debouncedLoading && overlay && (
        <LoadingOverlay
          overlayOpacity={overlayOpacity}
          overlayMessage={overlayMessage}
        />
      )}
      {overlay ? children : (!loading && children) || placeholder}
    </Wrapper>
  )
}
