
export function ProjectStatusToggle({ id, currentStatus }) {
    let newStatus = currentStatus === "draft" ? "published" : "draft";

    let dataToSend = {
        project: {
            status: newStatus
        }
    };

    fetch(`http://localhost:4000/projects/${id}`, {
        method: "PATCH",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('video-token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
    })
    .catch((error) => console.log("project status update error:", error));
}