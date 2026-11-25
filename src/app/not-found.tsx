import Link from "next/link";
import { PageHeader } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHeader title="Không tìm thấy trang" lead="Đường dẫn này không tồn tại.">
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">Về trang chủ</Link>
        <Link href="/#lien-he" className="btn btn-ghost-dark">Liên hệ</Link>
      </div>
    </PageHeader>
  );
}
