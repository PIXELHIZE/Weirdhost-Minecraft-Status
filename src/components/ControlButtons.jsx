import { usePowerOps } from "../hooks/usePowerOps";
import { useRenew } from "../hooks/useRenew";
import LoadingSpinner from "./LoadingSpinner";

const IS_PLUS =
  String(import.meta.env.VITE_PLUS ?? "false")
    .trim()
    .toLowerCase() === "true";

export default function ControlButtons({ online }) {
  const power = usePowerOps();
  const renew = useRenew();

  return (
    <div className="flex-between" style={{ gap: "0.5rem", marginTop: "1rem" }}>
      {!online && (
        <button
          className="btn-primary"
          onClick={() => power.mutate()}
          disabled={power.isLoading}
        >
          {power.isLoading ? <LoadingSpinner white /> : "서버 시작"}
        </button>
      )}

      {!IS_PLUS && (
        <button
          className="btn-secondary"
          onClick={() => renew.mutate()}
          disabled={renew.isLoading}
        >
          {renew.isLoading ? <LoadingSpinner /> : "시간 연장"}
        </button>
      )}
    </div>
  );
}
