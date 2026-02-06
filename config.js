// ====== Contract (จาก Remix: Deployed Contract Address + ABI) ======
// ✅ ต้องเป็น "ที่อยู่สัญญา" ที่ Remix แสดงใน Deploy & Run > Deployed Contracts
const CONTRACT_ADDRESS = "0xD25943045a46079C763f7397E87D1B098E68A4e3";

// ✅ ABI ของสัญญา (คัดมาจาก Remix)
const ABI = [
  {
    "inputs": [
      { "internalType": "address[3]", "name": "_approvers", "type": "address[3]" },
      { "internalType": "address[2]", "name": "_withdrawers", "type": "address[2]" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  { "inputs": [], "name": "AlreadyApproved", "type": "error" },
  { "inputs": [], "name": "AlreadyWithdrawn", "type": "error" },
  {
    "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }],
    "name": "approveWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },

  // ✅ donate() ต้องมี ไม่งั้น contract.donate จะไม่รู้จัก
  {
    "inputs": [],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },

  { "inputs": [], "name": "DuplicateAddress", "type": "error" },
  { "inputs": [], "name": "InvalidIndex", "type": "error" },
  { "inputs": [], "name": "NotApprovedEnough", "type": "error" },
  { "inputs": [], "name": "NotApprover", "type": "error" },
  { "inputs": [], "name": "NotEnoughETH", "type": "error" },
  { "inputs": [], "name": "NotWithdrawer", "type": "error" },
  { "inputs": [], "name": "WrongApproverCount", "type": "error" },
  { "inputs": [], "name": "WrongWithdrawerCount", "type": "error" },
  { "inputs": [], "name": "ZeroAddress", "type": "error" },

  // ✅ Events สำหรับ Financial Trail
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "Donated",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "internalType": "string", "name": "purpose", "type": "string" }
    ],
    "name": "requestWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "index", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "approver", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "approvals", "type": "uint256" }
    ],
    "name": "WithdrawApproved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "index", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "purpose", "type": "string" }
    ],
    "name": "WithdrawExecuted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "index", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "requester", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "purpose", "type": "string" }
    ],
    "name": "WithdrawRequested",
    "type": "event"
  },
  { "stateMutability": "payable", "type": "receive" },

  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "approvers",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getApprovers",
    "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }],
    "name": "getRequest",
    "outputs": [
      { "internalType": "address", "name": "requester", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "internalType": "string", "name": "purpose", "type": "string" },
      { "internalType": "uint256", "name": "approvals", "type": "uint256" },
      { "internalType": "bool", "name": "withdrawn", "type": "bool" },
      { "internalType": "uint256", "name": "createdAt", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWithdrawers",
    "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWithdrawRequestCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "name": "hasApproved",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "index", "type": "uint256" },
      { "internalType": "address", "name": "approverAddr", "type": "address" }
    ],
    "name": "isApprovedBy",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "isApprover",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "isWithdrawer",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "REQUIRED_APPROVALS",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "withdrawers",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "withdrawRequests",
    "outputs": [
      { "internalType": "address", "name": "requester", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "internalType": "string", "name": "purpose", "type": "string" },
      { "internalType": "uint256", "name": "approvals", "type": "uint256" },
      { "internalType": "bool", "name": "withdrawn", "type": "bool" },
      { "internalType": "uint256", "name": "createdAt", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// ====== ROLE LISTS ======
const APPROVERS = [
  "0x8645685bfEf2FF4b5b46488507682157CEB32439",
  "0x94c7d80505d67F5e6a073A8CB8afC5810CeB5644",
  "0xe424A835Ac257A7Eb62e68C6A8450D88eB47b6f3"
].map(a => a.toLowerCase());

const WITHDRAWERS = [
  "0x967D205C7d1DAcD5C92c22E578303e317D57C8F9",
  "0x16AdB0864dEC4CE02a886694EEF21f64Cb278eb3"
].map(a => a.toLowerCase());

// ====== helpers ======
function detectRole(addr){
  if(!addr) return "Unknown";
  const x = addr.toLowerCase();
  if (APPROVERS.includes(x)) return "Approver";
  if (WITHDRAWERS.includes(x)) return "Withdrawer";
  return "User";
}
function short(a){ return a ? a.slice(0,6)+"..."+a.slice(-4) : "-"; }

// สีข้อความแจ้งเตือนให้เข้าธีม
function setMsg(el, t, ok=true){
  const okColor = "#d4af37";
  const badColor = "#ff4d4d";
  el.innerHTML = `<span style="color:${ok?okColor:badColor};font-weight:900">${t}</span>`;
}

// กัน ENS/ช่องว่าง/ข้อความ
function assertContractAddress(ethers){
  if(!CONTRACT_ADDRESS || typeof CONTRACT_ADDRESS !== "string"){
    throw new Error("CONTRACT_ADDRESS หาย/ไม่ถูกต้อง");
  }
  const addr = CONTRACT_ADDRESS.trim();
  if(!ethers.utils.isAddress(addr)){
    throw new Error("CONTRACT_ADDRESS ต้องเป็น address 0x... (ห้ามเป็นข้อความ/ENS/ช่องว่าง)");
  }
  return ethers.utils.getAddress(addr);
}

// กันกรณีใส่ wallet address แทน contract address
async function assertIsContract(provider, addr){
  const code = await provider.getCode(addr);
  if(!code || code === "0x"){
    throw new Error("CONTRACT_ADDRESS นี้ไม่ใช่สัญญา (เหมือนเป็น address ของคน) → ไป copy จาก Remix Deployed Contracts ใหม่");
  }
}

// guard + redirect
function guard(requiredRole){
  const ok = localStorage.getItem("logged_in") === "1";
  const role = localStorage.getItem("role");
  if(!ok || !role){ location.href = "./index.html"; return false; }
  if(requiredRole && role !== requiredRole){ location.href = "./index.html"; return false; }
  return true;
}
function redirectByRole(role){
  if(role === "Approver") location.href = "./approver.html";
  else if(role === "Withdrawer") location.href = "./withdrawer.html";
  else location.href = "./user.html";
}
