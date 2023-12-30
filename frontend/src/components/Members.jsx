
export default function Members(props) {  
    return (
    <div className='flex justify-center flex-col items-center'>
            <img className="w-[10rem] h-[10rem] rounded-full inline border-2 border-green-800 " src={props.url} alt="Core Member" />
            <div className='my-5 text-center'>
              <p className=''>{props.name}</p>
              <p className="">{props.role}</p>
            </div>
    </div>
  )
}