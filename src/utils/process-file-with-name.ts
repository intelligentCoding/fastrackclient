export function processFileWithName(file_input: any) {
  // Process Digital File Name section
  const splitArray = file_input?.original?.split('/');
  let fileSplitName = splitArray?.[splitArray?.length - 1]?.split('.');
  const fileType = fileSplitName?.pop(); // it will pop the last item from the fileSplitName arr which is the file ext
  const filename = fileSplitName?.join('.'); // it will join the array with dot, which restore the original filename

  return [
    {
      fileType: fileType,
      filename: filename,
    },
  ];
}