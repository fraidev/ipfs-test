async function main() {
  const { create } = await import("ipfs-client");
  const all = (await import("it-all")).default;
  const { concat: uint8ArrayConcat } = await import("uint8arrays/concat");
  const { toString: uint8ArrayToString } = await import(
    "uint8arrays/to-string"
  );

  const ipfs = create({
    http: "http://USERNAME:PASSWORD@35.233.0.27",
  });

  const { cid } = await ipfs.add("helloworld");
  console.info(cid);

  const file = ipfs.cat(cid);
  const data = uint8ArrayConcat(await all(file));
  console.info(uint8ArrayToString(data));

  console.log(
    `You can use the public url now: https://ipfs.gcp.marigold.dev/ipfs/${cid.toString()}`
  );
}

main();
