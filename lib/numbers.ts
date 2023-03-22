import { utils } from "ethers";
import { BigNumberish } from "@ethersproject/bignumber";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInYears,
} from "date-fns";

const trauncateFractionAndFormat = (
  parts: Intl.NumberFormatPart[],
  digits: number
) => {
  return parts
    .map(({ type, value }) => {
      if (type !== "fraction" || !value || value.length < digits) {
        return value;
      }

      let formattedValue = "";
      for (
        let idx = 0, counter = 0;
        idx < value.length && counter < digits;
        idx++
      ) {
        if (value[idx] !== "0") {
          counter++;
        }
        formattedValue += value[idx];
      }
      return formattedValue;
    })
    .reduce((string, part) => string + part);
};

function formatBN(
  amount: BigNumberish | null | undefined,
  maximumFractionDigits: number
): any {
  if (typeof amount === "undefined" || amount === null) return "-";

  const amountToFormat =
    typeof amount === "number" ? amount : +utils.formatEther(amount);

  const parts = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
    notation: "compact",
    compactDisplay: "short",
  }).formatToParts(amountToFormat);

  if (parts && parts.length > 0) {
    return trauncateFractionAndFormat(parts, maximumFractionDigits);
  } else {
    return amount;
  }
}

const dateDiff = (a: string, b?: string) => {
  const start = b ? new Date(b) : new Date();
  const end = new Date(a);
  const y = differenceInYears(start, end);
  if (y > 0) {
    return `${y}Y`;
  }
  const M = differenceInMonths(start, end);
  if (M > 0) {
    return `${M}M`;
  }
  const d = differenceInDays(start, end);
  if (d > 0) {
    return `${d}d`;
  }
  const h = differenceInHours(start, end);
  if (h > 0) {
    return `${h}h`;
  }
  const m = differenceInMinutes(start, end);
  if (m > 0) {
    return `${m}m`;
  }
  const s = differenceInSeconds(start, end);
  if (s > 0) {
    return `${s}s`;
  }
};

export { formatBN, dateDiff };
