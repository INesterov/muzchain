declare module 'web-audio-daw' {

  interface Envelope {
    attack?: number;
    decay?: number;
    sustain?: number;
    hold?: number;
    release?: number;
  }

  interface Filter {
    type: 'lowpass' | 'highpass' | 'bandpass' | 'lowshelf' | 'highshelf' | 'peaking' | 'notch' | 'allpass';
    frequency: number;
    q: number;
    env?: {
      frequency?: number;
      attack?: number;
    }
  }

  interface Reverb {
    wet?: number;
    impulse?: string;
  }

  interface Delay {
    delayTime?: number;
    wet?: number;
    feedback?: number;
  }

  type Shape = 'sine' | 'sawtooth' | 'square' | 'triangle';

  interface Vibrato {
    shape?: Shape;
    magnitude?: number;
    speed?: number;
    attack?: number;
  }

  interface Tremolo {
    shape?: Shape;
    magnitude?: number;
    speed?: number;
    attack?: number;
  }

  interface ConstructorArgs {
    source: string;
    volume?: number;
    loop?: boolean;
    rate?: number;
    pitch?: string | number;
    detune?: number;
    panning?: number | number[];
    panningModel?: 'HRTF' | 'equalpower';
    rolloffFactor?: number;
    env?: Envelope;
    filter?: Filter;
    reverb?: Reverb;
    delay?: Delay;
    vibrato?: Vibrato;
    tuna?: any;
  }

  interface PlayArgs {
    volume?: number;
    wait?: number;
    loop?: boolean;
    offset?: number;
    rate?: number;
    pitch?: string;
    label?: string;
    env?: Envelope;
    panning?: number | number[];
    filter?: Filter;
    delay?: Delay;
  }

  class Wad {
    constructor(args: ConstructorArgs);
    public static audioContext: AudioContext;
    play: (args?: PlayArgs) => Promise<this>;
    stop: (label?: string) => void;
    pause: (label?: string) => void;
    unpause: (args?: PlayArgs) => void;
    setVolume: (volume: number, timeConstant?: string, label?: string) => void;
    setPitch: (pitch: string, timeConstant?: string, label?: string) => void;
    setDetune: (detune: number, timeConstant?: string, label?: string) => void;
    setPanning: (panning: Record<string, unknown> | any[], timeConstant?: string) => void;
    setRate: (rate: number) => void;
    setReverb: (wet: number) => void;
    setDelay: (delayTime?: number, wet?: number, feedback?: number) => void;
    reverse: () => void;
    setUpExternalFxOnPlay: (args: ConstructorArgs, context: AudioContext) => void;
    soundSource: {
      connect: (node: unknown) => void;
      type: string;
    }
  }

  export = Wad;
}
