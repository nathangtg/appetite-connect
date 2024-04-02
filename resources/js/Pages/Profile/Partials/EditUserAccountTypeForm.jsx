import { useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";

export default function EditUserAccountTypeForm({ user, className = "" }) {
    const [editingAccountType, setEditingAccountType] = useState(false);

    const { data, setData, put, processing, reset, errors } = useForm({
        account_type: user.account_type || "customer",
    });

    const openEditAccountTypeModal = () => {
        setEditingAccountType(true);
    };

    const updateAccountType = (e) => {
        e.preventDefault();

        put(route("profile.update"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => {}, // Handle error if needed
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setEditingAccountType(false);
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Edit Account Type
                </h2>
            </header>

            <div>
                <InputLabel
                    htmlFor="account_type"
                    value="Account Type"
                    className="sr-only"
                />

                <select
                    id="account_type"
                    name="account_type"
                    value={data.account_type}
                    onChange={(e) => setData("account_type", e.target.value)}
                    className="mt-1 block w-3/4"
                >
                    <option value="restaurant">Restaurant</option>
                    <option value="customer">Customer</option>
                </select>

                <InputError message={errors.account_type} className="mt-2" />
            </div>

            <Modal show={editingAccountType} onClose={closeModal}>
                <form onSubmit={updateAccountType} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Confirm Account Type Change
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Are you sure you want to change your account type?
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            type="submit"
                            className="ms-3"
                            disabled={processing}
                        >
                            Confirm
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
