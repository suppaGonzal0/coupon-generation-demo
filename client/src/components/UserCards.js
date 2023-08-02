import { Card, CardBody } from "@nextui-org/react";

export const UserCards = ({users}) => {

    const cardBody = users && users.map((user, index) => {
        return (
            <Card className="m-3 min-w-[340px]" key={index}>
                <CardBody className="bg-gradient-to-r from-rose-400 from-0% to-violet-400 to-90%">
                    <p className="text-bold text-white text-center">{user.email}</p>
                </CardBody>
            </Card>
        )
    })

    return (
        <div className="flex flex-wrap justify-center">
            {cardBody}
        </div>
    )
}
