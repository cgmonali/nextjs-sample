import { useRouter } from "next/router";

function Developer (){

    const router=useRouter();
    console.log(router.query.developerId)

    const details = [

        { id : 1, name: 'person1', role: ' Developer1'},
        
        { id : 2, name: 'person2', role: 'Developer2'},
        
        { id : 3, name: 'person3', role: 'Developer3'}
        
        ]
        const developer = details.find((item) => item.id === parseInt(router.query.developerId, 10));

        if (!developer) {
            return <h1>Developer doesn't exist</h1>;
        }
    
        return (
            <div>
                <h1>{developer.name}</h1>
                <h2>{developer.role}</h2>
            </div>
        );
}

export default  Developer;