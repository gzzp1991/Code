import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";

jest.mock("./sound-player");

describe("auto class mock", () => {
  beforeEach(() => {
    SoundPlayer.mockClear();
  });

  it("We can check if the consumer called the class constructor", () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
  });

  it("We can check if the consumer called a method on the class instance", () => {
    expect(SoundPlayer).not.toHaveBeenCalled();

    const soundPlayerConsumer = new SoundPlayerConsumer();
    // Constructor should have been called again:
    expect(SoundPlayer).toHaveBeenCalledTimes(1);

    soundPlayerConsumer.playSomethingCool();
    const coolSoundFileName = "song.mp3";

    const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
    const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
    expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);

    expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
    expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
  });
});

describe("When SoundPlayer throws an error", () => {
  beforeAll(() => {
    SoundPlayer.mockImplementation(() => {
      return {
        playSoundFile: () => {
          throw new Error("Test error");
        }
      };
    });
  });

  it("Should throw an error when calling playSomethingCool", () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
  });
});
