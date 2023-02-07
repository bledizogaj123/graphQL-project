
export default function ProjectCard({ project }) {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-betwwen align-items-center">
                        <div className="card-title">
                            <h5 className="card-title" >{project.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
