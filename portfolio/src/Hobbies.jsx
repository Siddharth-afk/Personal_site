export const Hobbies = () => {
  return (
    <div className="flex">       
        <div className="grid grid-cols-2 h-[100vh] w-[100vw]">
            <div className="bg-gradient-to-b from-cyan-950 from-1% to-black h-full w-full">

            </div>

            <div className="bg-slate-100 h-full w-full flex"> 
                <div className="flex w-[70%] h-[85%] bg-slate-200 mx-auto my-auto rounded-md">
                  <div className="grid grid-rows-2 mx-auto px-8 py-8">
                    <div>
                      <p className="font-semibold text-4xl">Hobbies and Personal Interests</p>
                    </div>
                    <div>
                      <p>Other than the technical stuff, I like to dabble in photography as well as a bit of editing, writing and various different thing in the content creation space! I'm a big fan of fiction novels, manga and gaming. I'm actively engaged in the tech community and always up to date with the latest tech, software or product.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
