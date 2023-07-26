import { knowledge } from "@utils/knowledge";
import { Tooltip } from "flowbite-react";

const knowledgeComponent = () => {
  return (
    <>
      <div className="mt-36" id="knowledge">
        <h2 className="Subtitle text-center  pb-16">Conocimientos</h2>
        <div className="Content-icons">
          {knowledge.map(({ link, name }) => (
            <div key={name}>
              <Tooltip content={name} className="hidden lg:block md:block">
                <img
                  src={link}
                  alt={name}
                  width={60}
                  height={70}
                  aria-label={name}
                  className="mx-auto hover:scale-110 transition-all"
                />
              </Tooltip>

              <h3 className="text-center font-nunito text-slate-700 italic lg:hidden md:hidden">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default knowledgeComponent;
