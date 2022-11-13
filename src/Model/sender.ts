import { start } from "repl";
import { create, Whatsapp, Message, SocketState } from "venom-bot";

export type QRCode = {
  base64Qr: string,
  attempts: number,
}

class Sender {
  private client: Whatsapp;
  private connected: boolean;
  private qr: QRCode;
  private allGroup: []

  get isConnected() : boolean {
    return this.connected;
  }

  get qrCode() : QRCode {
    return this.qr;
  }

  get allGroups(): [] {
    return this.allGroup;
  }

  clientConnneted() {
    return this.client
  }

  constructor() {
    this.initialize();
  }

  private initialize() {
    const qr = (base64Qr: string, attempts: number ) => {
      this.qr = { base64Qr, attempts }
    }

    const status = (statusSession: string) => {

      this.connected = ["isLogged", "qrReadSucess", "chartsAvailable"].includes(
        statusSession
      )
    }

    const start = (client: Whatsapp) => {
      this.client = client;

      client.onStateChange((state) => {
        this.connected = state === SocketState.CONNECTED
      });
    }

    create({ session: "wa-server-dev" })
      .then((client) => start(client))
      .catch((error) => console.error(error))
  }
}

export default Sender;

