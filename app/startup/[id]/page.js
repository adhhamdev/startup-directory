const StartupPage = ({params}) => {
    console.log(params.id);
    return (
        <div>
            Startup {params.id}
        </div>
    );
}

export default StartupPage;