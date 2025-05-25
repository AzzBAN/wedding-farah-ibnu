import { Button, ConfigProvider, Form, FormProps, Input, List, Select } from "antd";
import { useState } from "react";

type FieldType = {
  name?: string;
  ucapan?: string;
  confirmation?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const { Option } = Select;
export default function Ucapan() {
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);

  const onChangePage = (page: number, pageSize: number) => {
    setPage(page);
  };

  const comments: { author: string; message: string; date: string }[] = [
    {
      author: "Tt Nova Richard",
      message: "Congratulation to Raka n Nanda… Semoga berbahagia selalu.dan menjadi keluarga samawa…dan cepat dapat yunior yaaa….amiiin YRA….",
      date: "3 bulan, 3 minggu lalu",
    },
    {
      author: "ANC VWT",
      message: "Congrats Nanda & Raka! Selamat menempuh hidup baru Barokah untuk Keluarga besar Achmad Bustani beserta besan.",
      date: "4 bulan lalu",
    },
    {
      author: "Subianto",
      message:
        "Selamat menempuh hidup baru Mas Raka. Semoga menjadi keluarga bahagia dan langgeng, serta cepat dapat momongan. Amiin, Selamat menempuh hidup baru Mas Raka. Semoga menjadi keluarga bahagia dan langgeng, serta cepat dapat momongan. Amiin, Selamat menempuh hidup baru Mas Raka. Semoga menjadi keluarga bahagia dan langgeng, serta cepat dapat momongan. Amiin",
      date: "4 bulan lalu",
    },
    {
      author: "Ujang",
      message: "selamat menempuh hidup baruu nanda dan mas raka. semoga rumah tangga kalian selalu dilimpahi kebahagiaan, keberkahan, dan sakinah, mawaddah, warahmah sampai maut yang memisahkan. aamiin",
      date: "4 bulan lalu",
    },
    {
      author: "Tt Nova Richard",
      message: "Congratulation to Raka n Nanda… Semoga berbahagia selalu.dan menjadi keluarga samawa…dan cepat dapat yunior yaaa….amiiin YRA….",
      date: "3 bulan, 3 minggu lalu",
    },
    {
      author: "ANC VWT",
      message: "Congrats Nanda & Raka! Selamat menempuh hidup baru Barokah untuk Keluarga besar Achmad Bustani beserta besan.",
      date: "4 bulan lalu",
    },
    {
      author: "Subianto",
      message: "Selamat menempuh hidup baru Mas Raka. Semoga menjadi keluarga bahagia dan langgeng, serta cepat dapat momongan. Amiin",
      date: "4 bulan lalu",
    },
    {
      author: "Ujang",
      message: "selamat menempuh hidup baruu nanda dan mas raka. semoga rumah tangga kalian selalu dilimpahi kebahagiaan, keberkahan, dan sakinah, mawaddah, warahmah sampai maut yang memisahkan. aamiin",
      date: "4 bulan lalu",
    },
    {
      author: "Tt Nova Richard",
      message: "Congratulation to Raka n Nanda… Semoga berbahagia selalu.dan menjadi keluarga samawa…dan cepat dapat yunior yaaa….amiiin YRA….",
      date: "3 bulan, 3 minggu lalu",
    },
    {
      author: "ANC VWT",
      message: "Congrats Nanda & Raka! Selamat menempuh hidup baru Barokah untuk Keluarga besar Achmad Bustani beserta besan.",
      date: "4 bulan lalu",
    },
    {
      author: "Subianto",
      message: "Selamat menempuh hidup baru Mas Raka. Semoga menjadi keluarga bahagia dan langgeng, serta cepat dapat momongan. Amiin",
      date: "4 bulan lalu",
    },
    {
      author: "Ujang",
      message: "selamat menempuh hidup baruu nanda dan mas raka. semoga rumah tangga kalian selalu dilimpahi kebahagiaan, keberkahan, dan sakinah, mawaddah, warahmah sampai maut yang memisahkan. aamiin",
      date: "4 bulan lalu",
    },
  ];
  return (
    <>
      <div className="relative flex justify-center bg-[#990000] pt-10 pb-10 w-full px-10">
        <div
          className="absolute w-full h-full opacity-15 -mt-10 -mb-10"
          style={{
            backgroundImage: "url('/images/content/content-3/comment_background.png')",
            backgroundSize: "cover",
            backgroundRepeat: "repeat-y",
          }}
        ></div>
        <div className="relative flex flex-col gap-7 justify-center items-center max-w-[500px]">
          <span className="font-imperial-script text-[10vw] md:text-[7vw] lg:text-[5vw] text-[#f1d6ab] font-black text-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">Ucapan</span>
          <div className="grid grid-cols-3 w-full gap-7">
            <div className="w-full flex flex-col justify-center items-center p-2 bg-[#C61B1B] text-[#f1d6ab] aspect-2/1 rounded-xl drop-shadow-lg inset-shadow-2xs">
              <span className="text-[5vw] md:text-[3vw] lg:text-[2vw]">22</span>
              <span className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">Hadir</span>
            </div>
            <div className="w-full flex flex-col justify-center items-center p-2 bg-[#C61B1B] text-[#f1d6ab] aspect-2/1 rounded-xl drop-shadow-lg inset-shadow-2xs">
              <span className="text-[5vw] md:text-[3vw] lg:text-[2vw]">22</span>
              <span className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">Tidak Hadir</span>
            </div>
            <div className="w-full flex flex-col justify-center items-center p-2 bg-[#C61B1B] text-[#f1d6ab] aspect-2/1 rounded-xl drop-shadow-lg inset-shadow-2xs">
              <span className="text-[5vw] md:text-[3vw] lg:text-[2vw]">22</span>
              <span className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">Masih Ragu</span>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-[#f1d6ab] aspect-2/1 rounded-xl drop-shadow-lg inset-shadow-2xs">
            <Form name="basic" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" className="w-full">
              <Form.Item<FieldType> name="name" rules={[{ required: true, message: "Name is required" }]}>
                <Input placeholder="Nama" />
              </Form.Item>

              <Form.Item<FieldType> name="ucapan" rules={[{ required: true, message: "Ucapan is required" }]}>
                <Input.TextArea rows={4} placeholder="Ucapan" />
              </Form.Item>

              <Form.Item<FieldType> name="confirmation" rules={[{ required: true, message: "Confirmation is required" }]}>
                <Select
                  placeholder="Konfirmasi Kehadiran"
                  options={[
                    { value: "yes", label: "Hadir" },
                    { value: "no", label: "Tidak Hadir" },
                    { value: "maybe", label: "Masih Ragu" },
                  ]}
                />
              </Form.Item>

              <Form.Item label={null}>
                <ConfigProvider button={{ className: "!bg-[#f1d6ab] !text-[#C61B1B] hover:!bg-[#f2e1c4] hover:!text-[#c72222]" }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </ConfigProvider>
              </Form.Item>
            </Form>
            {/* <div id="comments" className="w-full">
              <List
                pagination={{ position: "bottom", align: "center", pageSize: 5 }}
                itemLayout="horizontal"
                dataSource={comments}
                className="max-h-[300px] overflow-y-scroll"
                renderItem={(item, index) => {
                  return (
                    <div className={`flex flex-col px-3 py-2 rounded-2xl mb-3 bg-white text-black rounded-bl-sm`}>
                      <span className="font-semibold text-sm mb-1">{item.author}</span>
                      <span className="text-sm">{item.message}</span>
                    </div>
                  );
                }}
              />
            </div> */}
            <div id="comments" className="w-full flex flex-col h-[500px]">
              {/* Scrollable Comment List */}
              <div className="flex-1 overflow-y-scroll px-2">
                <List
                  itemLayout="horizontal"
                  dataSource={comments.slice((page - 1) * 5, page * 5)}
                  renderItem={(item, index) => (
                    <div className="flex flex-col px-3 py-2 rounded-2xl mb-3 bg-white text-black rounded-bl-sm">
                      <span className="font-semibold text-sm mb-1">{item.author}</span>
                      <span className="text-sm">{item.message}</span>
                    </div>
                  )}
                />
              </div>

              {/* Fixed Pagination at Bottom */}
              <div>
                <ConfigProvider theme={{ token: { colorText: "#f1d6ab", colorBgContainer: "#C61B1B", colorPrimary: "#f1d6ab" }, components: { Pagination: { colorTextDisabled: "#990000" } } }}>
                  <List
                    pagination={{ position: "bottom", align: "center", pageSize: 5, onChange: onChangePage }}
                    dataSource={comments}
                    renderItem={() => null} // fake render to just show pagination bar
                  />
                </ConfigProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
