import React from 'react'
import * as motion from "motion/react-client";
import Header from '@/components/parser/Headar';
import ViewExtracted from '@/components/parser/ViewExtracted';



export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params
  return (
       <div className="bg-background    ">
         {/* Page title */}
         <Header id={id} />
   
         <motion.div
           initial={{ opacity: 0, filter: "blur(16px)" }}
           whileInView={{ opacity: 1, filter: "blur(0px)" }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="w-full   xl:h-[calc(100svh-100px)]"
         >
           <ViewExtracted id={id} />
         </motion.div>
       </div>
  )
}
