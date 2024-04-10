// ImageUploadInput.js

import React, { useState } from "react";

export default function ImageUploadInput({ value, onChange }) {
    const [preview, setPreview] = useState(value);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setPreview(null);
            onChange(null);
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
            onChange(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
            )}
        </div>
    );
}
