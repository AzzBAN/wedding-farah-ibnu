import { createComments, fetchComments, getConfirmationCount } from "@/api/comment/comment_api";
import { Button, ConfigProvider, Form, FormProps, Input, List, Pagination, Select } from "antd";
import { useEffect, useState } from "react";

type FieldType = {
  name: string;
  comment: string;
  confirmation: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Ucapan() {
  const [form] = Form.useForm();
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState<FieldType[]>([]);
  const [totalComments, setTotalComments] = useState(0);
  const [totalHadir, setTotalHadir] = useState(0);
  const [totalTidakHadir, setTotalTidakHadir] = useState(0);
  const [totalMasihRagu, setTotalMasihRagu] = useState(0);
  const pageSize = 5;
  const fetchAndSetComments = async (page: number) => {
    const offset = (page - 1) * pageSize;
    const result = await fetchComments(pageSize, offset);
    const confirmationCount = await getConfirmationCount();
    setTotalHadir(confirmationCount.data.totalHadir);
    setTotalTidakHadir(confirmationCount.data.totalTidakHadir);
    setTotalMasihRagu(confirmationCount.data.totalMasihRagu);
    setTotalComments(result.data.total);
    setComments(result.data.comments);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const res = await createComments(values.name, values.comment, values.confirmation);
    fetchAndSetComments(1);
    console.log("Success:", res);
    console.log("Success:", values);
  };

  useEffect(() => {
    fetchAndSetComments(page);
  }, [page]);

  const onChangePage = (page: number, pageSize: number) => {
    setPage(page);
  };

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
              <span className="text-[5vw] md:text-[3vw] lg:text-[2vw]">{totalHadir}</span>
              <span className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">Hadir</span>
            </div>
            <div className="w-full flex flex-col justify-center items-center p-2 bg-[#C61B1B] text-[#f1d6ab] aspect-2/1 rounded-xl drop-shadow-lg inset-shadow-2xs">
              <span className="text-[5vw] md:text-[3vw] lg:text-[2vw]">{totalTidakHadir}</span>
              <span className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">Tidak Hadir</span>
            </div>
            <div className="w-full flex flex-col justify-center items-center p-2 bg-[#C61B1B] text-[#f1d6ab] aspect-2/1 rounded-xl drop-shadow-lg inset-shadow-2xs">
              <span className="text-[5vw] md:text-[3vw] lg:text-[2vw]">{totalMasihRagu}</span>
              <span className="text-[3vw] md:text-[1.5vw] lg:text-[1vw]">Masih Ragu</span>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-[#f1d6ab] aspect-2/1 rounded-xl drop-shadow-lg inset-shadow-2xs">
            <Form name="basic" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" className="w-full">
              <Form.Item<FieldType> name="name" rules={[{ required: true, message: "Name is required" }]}>
                <Input placeholder="Nama" />
              </Form.Item>

              <Form.Item<FieldType> name="comment" rules={[{ required: true, message: "Ucapan is required" }]}>
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
            {totalComments > 0 && (
              <div id="comments" className="w-full flex flex-col h-[500px]">
                {/* Scrollable Comment List */}
                <div className="flex-1 overflow-y-scroll px-2">
                  <List
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={(item, index) => (
                      <div className="flex flex-col px-3 py-2 rounded-2xl mb-3 bg-white text-black rounded-bl-sm">
                        <span className="font-semibold text-sm mb-1">{item.name}</span>
                        <span className="text-sm">{item.comment}</span>
                      </div>
                    )}
                  />
                </div>

                {/* Fixed Pagination at Bottom */}
                <div>
                  <ConfigProvider theme={{ token: { colorText: "#f1d6ab", colorBgContainer: "#C61B1B", colorPrimary: "#f1d6ab" }, components: { Pagination: { colorTextDisabled: "#990000" } } }}>
                    <Pagination current={page} align="center" onChange={onChangePage} total={totalComments} pageSize={pageSize} showSizeChanger={false} style={{ textAlign: "center", padding: "12px 0" }} />
                  </ConfigProvider>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
