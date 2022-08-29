import { describe, expect, it } from 'vitest'
import { Base64 } from '../src/base64.js'

describe('Base64', () => {
  it('encode with padding', () => {
    const textEncoder = new TextEncoder()
    expect(
      Base64.encode(new Uint8Array([77, 203])),
    ).toMatchSnapshot()
    expect(
      Base64.encode(new Uint8Array([80, 171, 243, 128])),
    ).toMatchSnapshot()
    expect(
      Base64.encode(textEncoder.encode('Hello, world!')),
    ).toMatchSnapshot()
    expect(
      Base64.encode(textEncoder.encode('你好，🌏！这是一个处理 Base64 的 ESM 库。')),
    ).toMatchSnapshot()
  })

  it('encode without padding', () => {
    const textEncoder = new TextEncoder()
    expect(
      Base64.encode(new Uint8Array([77, 203]), false),
    ).toMatchSnapshot()
    expect(
      Base64.encode(new Uint8Array([80, 171, 243, 128]), false),
    ).toMatchSnapshot()
    expect(
      Base64.encode(textEncoder.encode('Hello, world!'), false),
    ).toMatchSnapshot()
    expect(
      Base64.encode(textEncoder.encode('你好，🌏！这是一个处理 Base64 的 ESM 库。'), false),
    ).toMatchSnapshot()
  })

  it('decode with padding', () => {
    const textEncoder = new TextEncoder()
    expect(
      Base64.decode(Base64.encode(new Uint8Array([80, 171, 243, 128]))),
    ).toMatchSnapshot()
    expect(
      Base64.decode(Base64.encode(textEncoder.encode('Hello, world!'))),
    ).toMatchSnapshot()
  })

  it('decode without padding', () => {
    const textEncoder = new TextEncoder()
    expect(
      Base64.decode(Base64.encode(new Uint8Array([80, 171, 243, 128]), false)),
    ).toMatchSnapshot()
    expect(
      Base64.decode(Base64.encode(textEncoder.encode('Hello, world!'), false)),
    ).toMatchSnapshot()
  })
})
