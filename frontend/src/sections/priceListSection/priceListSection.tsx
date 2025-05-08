import mockData from "@/entities/priceGrid.ts/mockData";

  export default function PriceListSection() {
    if (mockData?.[0]) {
      return (
        <div className="bg-[#222021]">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] m-0 m-auto text-white text-[12px] pt-10 pb-10">
            <div className="text-[36px] pb-5 md:text-[48px] lg:-[72px]">
              <strong>Price list</strong>
            </div>
            <div className="grid grid-cols-7 gap-2 overflow-y-scroll h-[350px] w-[100%] m-0 m-auto text-center border border-white rounded-xl p-3">
              {Object.keys(mockData[0]).map((item: string, index) => (
                <div
                  key={`key-${index}`}
                  className="text-[10px] md:text-[16px] lg:text-[20px]"
                >
                  <strong>{item}</strong>
                </div>
              ))}
  
              {mockData.map((item, index) =>
                Object.values(item).map((value: string, innerIndex) => (
                  <div
                    className="text-[12px] md:text-[14px] lg:text-[18px]"
                    key={`${index}-${innerIndex}`}
                  >
                    {value}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      );
    }
    return <div>Looks like here`s no price lists</div>;
  }
  