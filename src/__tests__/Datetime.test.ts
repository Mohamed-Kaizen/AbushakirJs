import EtDatetime from '../Abushakir/datetime';
import Duration from '../utils/duration';

describe('Testing EtDatetime with Parameterized Constructor...', () => {
  const someDate: EtDatetime = new EtDatetime(2012, 7, 7);

  test('Testing Year on Parameterized Constructor', () => {
    expect(someDate.year).toBe(2012);
  });

  test('Testing Month on Parameterized Constructor', () => {
    expect(someDate.month).toBe(7);
  });

  test('Testing Day on Parameterized Constructor', () => {
    expect(someDate.day).toBe(7);
  });

  test('Testing Date on Parameterized Constructor', () => {
    expect(someDate.dayGeez).toBe('፯');
  });
});

describe('Parameterized Constructors (year only)...', () => {
  const someyear: EtDatetime = new EtDatetime(2010);

  test('Testing Year on Parameterized Constructor', () => {
    expect(someyear.year).toBe(2010);
  });

  test('Testing Month on Parameterized Constructor', () => {
    expect(someyear.month).toBe(1);
  });

  test('Testing Day on Parameterized Constructor', () => {
    expect(someyear.day).toBe(1);
  });
});

describe('Parameterized Constructors (NOW or the current time stamp)...', () => {
  const someyear: EtDatetime = new EtDatetime();
  const currentStamp: EtDatetime = new EtDatetime(Date.now());

  test('Testing Year on Parameterized Constructor', () => {
    expect(someyear.year).toBe(currentStamp.year);
  });

  test('Testing Month on Parameterized Constructor', () => {
    expect(someyear.month).toBe(currentStamp.month);
  });

  test('Testing Day on Parameterized Constructor', () => {
    expect(someyear.day).toBe(currentStamp.day);
  });

  test('Testing dayGeez on Parameterized Constructor', () => {
    expect(someyear.dayGeez).toBe(currentStamp.dayGeez);
  });

  test('Testing Hour on Parameterized Constructor', () => {
    expect(someyear.hour).toBe(currentStamp.hour);
  });

  test('Testing Minute on Parameterized Constructor', () => {
    expect(someyear.minute).toBe(currentStamp.minute);
  });

  test('Testing Second on Parameterized Constructor', () => {
    expect(someyear.second).toBe(currentStamp.second);
  });

  test('Testing Millisecond on Parameterized Constructor', () => {
    expect(someyear.millisecond).toBe(currentStamp.millisecond);
  });

  test('Testing toString() on Parameterized Constructor', () => {
    expect(someyear.toString()).toBe(currentStamp.toString());
  });

  test('Testing toString() on Parameterized Constructor', () => {
    expect(someyear.toIso8601String()).toBe(currentStamp.toIso8601String());
  });

  test('Testing toString() on Parameterized Constructor', () => {
    expect(someyear.toJson()).toEqual(currentStamp.toJson());
  });
});

describe('Parameterized Constructors (UNIX EPOCH or time stamp)...', () => {
  const someyear: EtDatetime = new EtDatetime(1585731446021);

  test('Testing toString() on Parameterized Constructor', () => {
    expect(someyear.toString()).toBe('2012-07-23 08:57:26.021');
  });

  test('Testing Year on Parameterized Constructor', () => {
    expect(someyear.year).toBe(2012);
  });

  test('Testing Month on Parameterized Constructor', () => {
    expect(someyear.month).toBe(7);
  });

  test('Testing Day on Parameterized Constructor', () => {
    expect(someyear.day).toBe(23);
  });

  test('Testing dayGeez on Parameterized Constructor', () => {
    expect(someyear.dayGeez).toBe('፳፫');
  });

  test('Testing Hour on Parameterized Constructor', () => {
    expect(someyear.hour).toBe(8);
  });

  test('Testing Minute on Parameterized Constructor', () => {
    expect(someyear.minute).toBe(57);
  });

  test('Testing Second on Parameterized Constructor', () => {
    expect(someyear.second).toBe(26);
  });

  test('Testing Millisecond on Parameterized Constructor', () => {
    expect(someyear.millisecond).toBe(21);
  });
});

describe('Parameterized Constructors (Full argument)...', () => {
  const someyear: EtDatetime = new EtDatetime(2012, 7, 7, 15, 12, 17, 500);

  test('Testing Year on Parameterized Constructor', () => {
    expect(someyear.year).toBe(2012);
  });

  test('Testing Month on Parameterized Constructor', () => {
    expect(someyear.month).toBe(7);
  });

  test('Testing Day on Parameterized Constructor', () => {
    expect(someyear.day).toBe(7);
  });

  test('Testing Hour on Parameterized Constructor', () => {
    expect(someyear.hour).toBe(15);
  });

  test('Testing Minute on Parameterized Constructor', () => {
    expect(someyear.minute).toBe(12);
  });

  test('Testing Second on Parameterized Constructor', () => {
    expect(someyear.second).toBe(17);
  });

  test('Testing MilliSecond on Parameterized Constructor', () => {
    expect(someyear.millisecond).toBe(500);
  });

  test('Testing ToString method on Parameterized Constructor', () => {
    expect(someyear.toString()).toMatch('2012-07-07 15:12:17.500');
  });

  test('Testing ToString method on Parameterized Constructor', () => {
    expect(someyear.toJson()).toEqual({
      year: '2012',
      month: '07',
      date: '07',
      hour: '15',
      min: '12',
      sec: '17',
      ms: '500',
    });
  });

  test('Testing ToString method on Parameterized Constructor', () => {
    expect(someyear.toIso8601String()).toEqual('2012-07-07T15:12:17.500');
  });
});

describe('Comparing two DateTime INSTANTS...', () => {
  const sometime: EtDatetime = new EtDatetime(2012, 7, 7, 15, 12, 17, 500);
  const beforeSometime: EtDatetime = new EtDatetime(2012, 6, 7, 15, 12, 17, 500);
  const equalToSometime: EtDatetime = new EtDatetime(2012, 7, 7, 15, 12, 17, 500);

  test('Testing Is After on Parameterized Constructor', () => {
    expect(sometime.isAfter(beforeSometime)).toBe(true);
  });

  test('Testing Is Before on Parameterized Constructor', () => {
    expect(sometime.isBefore(beforeSometime)).toBe(false);
  });

  test('Testing Is After on Parameterized Constructor', () => {
    expect(beforeSometime.isAfter(sometime)).toBe(false);
  });

  test('Testing Is Before on Parameterized Constructor', () => {
    expect(beforeSometime.isBefore(sometime)).toBe(true);
  });

  test('Testing Day on Parameterized Constructor', () => {
    expect(sometime.isAtSameMomentAs(equalToSometime)).toBe(true);
  });

  test('Testing Day on Parameterized Constructor', () => {
    expect(beforeSometime.isAtSameMomentAs(equalToSometime)).toBe(false);
  });
});

describe('Testing EtDatetime comparision...', () => {
  const now: EtDatetime = new EtDatetime(2012, 7, 23, 8, 57, 26, 21);
  const hourLater: EtDatetime = new EtDatetime(2012, 7, 25, 8, 57, 26, 21);
  const hourDifference: Duration = new Duration(2, 0, 0, 0, 0, 0); // 2 days difference

  test('Testing EtDatetime method "IsBefore"...', () => {
    expect(now.isBefore(hourLater)).toBe(true);
  });

  test('Testing EtDatetime method "isAfter"...', () => {
    expect(hourLater.isAfter(now)).toBe(true);
  });

  test('Testing EtDatetime method "isAtSameMomentAs"...', () => {
    expect(hourLater.isAtSameMomentAs(now)).toBe(false);
  });

  test('Testing EtDatetime method "compareTo"...', () => {
    expect(hourLater.compareTo(hourLater)).toBe(0);
  });

  test('Testing EtDatetime method "compareTo"...', () => {
    expect(hourLater.compareTo(now)).toBe(1);
  });

  test('Testing EtDatetime method "add"...', () => {
    expect(now.add(hourDifference).toString()).toMatch('2012-07-25 08:57:26.021');
  });

  test('Testing EtDatetime method "subtract"...', () => {
    expect(hourLater.subtract(hourDifference).toString()).toMatch('2012-07-23 08:57:26.021');
  });

  test('Testing EtDatetime method "difference"...', () => {
    expect(now.difference(hourLater).inDays).toBe(2);
  });
});
