function About(){
    return (
        <div>
            <h1 className="text-6xl mb-4">깃허브 파인더</h1>
            {process.env.REACT_APP_GITHUB_URL}
        </div>
    )
}

export default About;