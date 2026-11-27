const STORAGE_KEY = "cis156.tasks.v1";
function loadTasks() {
    try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}
function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
