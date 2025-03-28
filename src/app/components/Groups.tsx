export default function Groups() {
    return (
        <div className="border border-gray-300 rounded-2xl p-4 bg-white max-w-md">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h2 className="text-lg font-semibold">Groups</h2>
                    <p className="text-sm text-gray-500">Subtitle goes here</p>
                </div>
                <button className="text-sm text-gray-600 bg-blue-100 px-3 py-1 rounded-lg">
                    View All
                </button>
            </div>
            <div className="space-y-2">
                <GroupItem name="Employee Group 1" count="1000+" />
                <GroupItem name="Employee Group 2" count="10000+" />
                <GroupItem name="Custom Group 1" count="100+" />
            </div>
        </div>
    );
}

function GroupItem({ name, count }: { name: string; count: string }) {
    return (
        <div className="flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
            <span className="text-gray-700">{name}</span>
            <span className="text-gray-600 font-medium">{count}</span>
        </div>
    );
}
