import { useState } from "react";
import { Pencil } from "lucide-react";

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (newValue: string) => void | Promise<void>;
}

export default function EditableField({ label, value, onSave }: EditableFieldProps) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = async () => {
    await onSave(tempValue);
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-between w-full py-2 border-b">
      <span className="font-semibold">{label}</span>

      {!editing ? (
        <div className="flex items-center gap-2">
          <span>{value}</span>
          <button onClick={() => setEditing(true)} className="text-gray-500 hover:text-black">
            <Pencil size={16} />
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <input
            autoFocus
            className="border rounded px-2 py-1 text-sm"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
          <button
            onClick={handleSave}
            className="px-2 py-1 bg-blue-600 text-white text-sm rounded"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}
