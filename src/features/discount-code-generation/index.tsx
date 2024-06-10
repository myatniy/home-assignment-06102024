import { generate } from 'random-words';
import { useState } from 'react';
import { getRandomArbitrary } from '../../utils/get-random-arbitrary';

const generateDiscountCode = () => {
  const words = generate({
    min: 2,
    max: 4,
    minLength: 4,
    maxLength: 8,
    formatter: (word) => word.toUpperCase(),
  });
  const currentYear = new Date().getFullYear();
  const generatedYear = getRandomArbitrary(1000, currentYear + 1);
  return `${typeof words === 'string' ? words : words.join('')}${generatedYear}`;
};

export function DiscountCodeGeneration({ className = '' }: { className?: string }) {
  const [couponCode, setCouponCode] = useState<string | null>(null);

  const handleCopyToClipboard = () =>
    couponCode ? navigator.clipboard.writeText(couponCode) : undefined;

  return (
    <fieldset className={[className].join(' ')}>
      <legend>Discount Code Generator</legend>
      <p className="text-center">{couponCode ?? '*** Generated Code Should Appear Here ***'}</p>
      <div className="flex flex-nowrap gap-x-2">
        <button className="w-full" onClick={() => setCouponCode(generateDiscountCode())}>
          Generate New Discount Code
        </button>
        <button className={!couponCode ? 'cursor-not-allowed' : ''} onClick={handleCopyToClipboard}>
          📋
        </button>
      </div>
    </fieldset>
  );
}
