type HeaderProps = {
    name: string;
    lastName: string;
    student_id: number;
}

const HeaderCard = ({ name, lastName, student_id }: HeaderProps) => {
    return (
        <div className='flex justify-center items-end space-x-2'>
            <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
            <span className='text-gray-400 italic my-2 text-xl'> by {name + " " + lastName + " " + student_id} </span>
        </div>
        
    )
}

export default HeaderCard