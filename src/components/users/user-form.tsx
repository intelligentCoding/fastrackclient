import { AddUser, Users } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { StyledInterface } from "styled-components";
import { userServiceValidationSchema } from "./user-validation-schema";
import Description from "../ui/description";
import Card from "../common/card";
import Input from "../ui/input";
import Button from "../ui/button";
import { useUpdateUsersMutation, useUsersMutation } from "@/data/users";
import Select from "../ui/select/select";
import SelectInput from "../ui/select-input";
import { useRolesQuery } from "@/data/roles";
import Loader from "../ui/loader/loader";
import ErrorMessage from "../ui/error-message";
import ValidationError from "../ui/form-validation-error";
import Label from "../ui/label";
import PaidToInput from "../common/paidToInput";

type FormValues = {
    email: string,
    firstName: string,
    lastName: string,
    role: any
}

const defaultValues = {
    email: '',
    firstName: "",
    lastName: "",
    role: ""
};

type IProps = {
    initialValues?: Partial<Users> | undefined;
};

export default function CreateOrUpdateUsers({
    initialValues,
}: IProps) {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        control,
        setValue,
        
        formState: { errors },
    } = useForm<FormValues>({
        // shouldUnregister: true,
        //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        defaultValues: initialValues
            ? initialValues
            : defaultValues,
        resolver: yupResolver(userServiceValidationSchema),
    });
    const { mutate: createUser, isLoading: creating } =
        useUsersMutation();
    const { mutate: updateUser, isLoading: updating } =
        useUpdateUsersMutation();
    const onSubmit = async (values: FormValues) => {
        const input = {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            role: values.role.value
        };
        if (!initialValues) {
            createUser({
                ...input
            })
        } else {
            updateUser({
                ...input,
                id: initialValues.id!
            })
        }
    };
    const options = [{ code: "ADMIN", id: "1" }, { code: "VIEW", id: "2" }, { code: "OFFICE", id: "3" }]
    const { Roles, loading: fetchingRoles, error } = useRolesQuery ({
        id:initialValues?.id
    });
    
    if (fetchingRoles) return <Loader text="Loading Roles" />
    
    if (error) return <ErrorMessage message={error.message} />
    const RolesArr = Roles.map((role) => {
        return {
            name: role.name, value: role.id
    }
    })
      
    return (
        <form onSubmit={handleSubmit(onSubmit)} id="formName">

            <div className="my-5 flex flex-wrap sm:my-8">
                <Description
                    title={initialValues ? 'Update Airport Details' : 'Create a User'}
                    className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5 "
                />

                <Card className="w-full sm:w-8/12 md:w-2/3">
                    <Input
                        label="First Name"
                        {...register('firstName')}
                        error={errors.firstName?.message}
                        variant="outline"
                        className="mb-5"
                    />
                    <Input
                        label="Last Name"
                        {...register('lastName')}
                        error={errors.lastName?.message}
                        variant="outline"
                        className="mb-5"
                    />
                    <Input
                        label="Email"
                        {...register('email')}
                        error={errors.email?.message}
                        variant="outline"
                        className="mb-5"
                    />
                    <Label>Role</Label>
                    <SelectInput
                        
                        name="role"
                        control={control}
                        getOptionLabel={(option: any) => option.name}
                        getOptionValue={(option: any) => option.value} 
                        options={RolesArr}
                        defaultValue={initialValues?.role}
                    />
                    <ValidationError message={errors.role?.message} />
                </Card>
            </div>
            <div className="mb-4 text-end">
                {initialValues && (
                    <Button
                        variant="outline"
                        onClick={router.back}
                        className="me-4"
                        type="button"
                    >
                        Go Back
                    </Button>
                )}

                <Button>
                    {initialValues
                        ? 'Update'
                        : 'Create'}
                </Button>
            </div>
        </form>
    )
}