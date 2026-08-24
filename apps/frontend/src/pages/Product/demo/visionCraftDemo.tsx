import { Sparkles, Wand2, X } from "lucide-react";
import { useMemo, useState } from "react";

type VisionCraftDemoProps = {
  onClose?: () => void;
};

const DUMMY_RESULT_IMAGE =
  "https://ik.imagekit.io/mindwalker/public/assets/visioncraftProductSection.webp?updatedAt=1772427038173&tr=w-900,q-75";

type DemoModel = {
  id: "nano-banana" | "seedream-45";
  title: string;
  subtitle: string;
};

const MODELS: DemoModel[] = [
  {
    id: "nano-banana",
    title: "Nano-Banana",
    subtitle: "Cepat untuk draft visual awal"
  },
  {
    id: "seedream-45",
    title: "SeeDream 4.5",
    subtitle: "Kualitas detail tinggi untuk final output"
  }
];

export function VisionCraftDemo({ onClose }: VisionCraftDemoProps) {
  const [selectedModel, setSelectedModel] = useState<DemoModel["id"]>("nano-banana");
  const [prompt, setPrompt] = useState("dummy");
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isEnhanced, setIsEnhanced] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGeneratedOnce, setHasGeneratedOnce] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const selectedModelData = useMemo(
    () => MODELS.find((model) => model.id === selectedModel) ?? MODELS[0],
    [selectedModel]
  );

  const handleEnhancePrompt = () => {
    if (isEnhancing || isEnhanced) return;
    setIsEnhancing(true);

    const finalText = "gambar menjadi baik";
    let pointer = 0;
    setPrompt("");

    const typingTimer = window.setInterval(() => {
      pointer += 1;
      setPrompt(finalText.slice(0, pointer));
      if (pointer >= finalText.length) {
        window.clearInterval(typingTimer);
        setIsEnhancing(false);
        setIsEnhanced(true);
      }
    }, 55);
  };

  const handleGenerate = () => {
    if (isGenerating || hasGeneratedOnce) return;
    setIsGenerating(true);
    setHasGeneratedOnce(true);
    setResultImage(null);

    window.setTimeout(() => {
      setResultImage(DUMMY_RESULT_IMAGE);
      setIsGenerating(false);
    }, 1700);
  };

  return (
    <section className="fixed inset-0 z-[260] overflow-y-auto bg-[rgba(231,238,247,0.5)] px-4 py-8 backdrop-blur-[6px] sm:px-6 sm:py-10">
      <div className="mx-auto w-[min(1120px,calc(100%-0.5rem))] sm:w-[min(1200px,calc(100%-1rem))]">
        <div className="relative rounded-3xl border border-[rgba(187,206,230,0.72)] bg-[rgba(255,255,255,0.66)] p-4 shadow-[0_20px_54px_rgba(37,66,98,0.22)] backdrop-blur-xl sm:p-6">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_12%,rgba(36,144,239,0.16),rgba(36,144,239,0)_38%),radial-gradient(circle_at_80%_82%,rgba(36,144,239,0.12),rgba(36,144,239,0)_44%)]" />
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <div>
              <img
                src="https://ik.imagekit.io/mindwalker/public/assets/logo/logoV1.svg"
                alt="Mindwalker logo"
                className="h-10 w-auto sm:h-12"
                loading="lazy"
              />
              <p className="mt-1 text-[0.86rem] text-[#47607b]">
                Simulasi fitur prompt enhancement dan generate image.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgba(161,187,216,0.7)] bg-[rgba(255,255,255,0.46)] text-[#26415e] transition-colors hover:bg-[rgba(255,255,255,0.7)]"
            >
              <X size={16} />
            </button>
          </div>

          <div className="relative z-10 grid gap-3 sm:grid-cols-2">
            {MODELS.map((model) => {
              const isActive = selectedModel === model.id;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model.id)}
                  className={`rounded-2xl border p-4 text-left transition-all duration-250 ${
                    isActive
                      ? "border-[#4aaeff] bg-[rgba(36,144,239,0.16)] text-[#16314d] shadow-[0_10px_24px_rgba(36,144,239,0.16)]"
                      : "border-[rgba(161,190,220,0.45)] bg-[rgba(255,255,255,0.45)] text-[#28425e] hover:border-[rgba(132,180,224,0.7)] hover:bg-[rgba(255,255,255,0.65)]"
                  }`}
                >
                  <p className="text-[1.02rem] font-semibold">{model.title}</p>
                  <p className="mt-1 text-[0.82rem] text-[#5a738f]">{model.subtitle}</p>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 mt-5 rounded-2xl border border-[rgba(157,191,224,0.5)] bg-[rgba(255,255,255,0.52)] p-4 sm:p-5">
            <label htmlFor="visioncraft-prompt" className="text-[0.8rem] font-semibold tracking-[0.04em] text-[#395573]">
              Prompt
            </label>
            <textarea
              id="visioncraft-prompt"
              value={prompt}
              readOnly
              className="mt-2 h-24 w-full resize-none rounded-xl border border-[rgba(163,194,223,0.48)] bg-[rgba(255,255,255,0.78)] px-3 py-2 text-[0.9rem] text-[#1f3852] outline-none transition-colors focus:border-[#4aaeff]"
            />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleEnhancePrompt}
                disabled={isEnhancing || isEnhanced}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.82rem] font-semibold text-white transition-colors disabled:opacity-100 ${
                  isEnhanced
                    ? "cursor-not-allowed bg-[linear-gradient(125deg,#1fbf75,#2fda8f)] shadow-[0_10px_24px_rgba(22,163,106,0.34)]"
                    : "shadow-[0_10px_24px_rgba(21,118,212,0.34)] bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] text-[#1f3a57] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.84)] disabled:opacity-70"
                }`}
              >
                <Wand2 size={14} />
                {isEnhancing ? "Enhancing..." : isEnhanced ? "Enhanced" : "Enhance Prompt"}
              </button>
              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating || hasGeneratedOnce}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(125deg,#2392ff,#3ab1ff)] px-4 py-2 text-[0.82rem] font-bold text-white shadow-[0_10px_24px_rgba(21,118,212,0.34)] disabled:opacity-70"
              >
                <Sparkles size={14} />
                {isGenerating ? "Generating..." : hasGeneratedOnce ? "Generated" : "Generate"}
              </button>
              <span className="text-[0.76rem] text-[#4d6784]">
                Model: <strong>{selectedModelData.title}</strong>
              </span>
            </div>
          </div>

          <div className="relative z-10 mt-5 overflow-hidden rounded-2xl border border-[rgba(163,194,223,0.52)] bg-[rgba(255,255,255,0.58)]">
            {isGenerating ? (
              <div className="grid h-[260px] place-items-center sm:h-[320px]">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-[rgba(169,208,244,0.5)] border-t-[#49adff]" />
                  <p className="text-[0.88rem] text-[#3d5b79]">Generating image with {selectedModelData.title}...</p>
                </div>
              </div>
            ) : resultImage ? (
              <img src={resultImage} alt="Generated demo result" className="h-[260px] w-full object-cover sm:h-[320px]" loading="lazy" />
            ) : (
              <div className="grid h-[260px] place-items-center sm:h-[320px]">
                <p className="text-[0.9rem] text-[#516d89]">Hasil generate akan muncul di sini.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
