export function Hamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      height="800px"
      width="800px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}
