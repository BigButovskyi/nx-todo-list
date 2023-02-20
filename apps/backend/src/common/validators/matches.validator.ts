import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

export function Match(property: string, validationOptions?: ValidationOptions) {
	return function (object: unknown, propertyName: string) {
		registerDecorator({
			name: Match.name,
			target: object.constructor,
			propertyName: propertyName,
			constraints: [property],
			options: validationOptions,
			validator: MatchConstraint,
		});
	};
}

@ValidatorConstraint({ name: Match.name, async: false })
class MatchConstraint implements ValidatorConstraintInterface {
	validate(value: unknown, args: ValidationArguments) {
		const [propertyNameToMatch] = args.constraints;
		const valueToMatch = args.object[propertyNameToMatch];
		return valueToMatch === value;
	}

	defaultMessage(validationArguments?: ValidationArguments): string {
		const propertyName = validationArguments.property;
		const [propertyNameToMatch] = validationArguments.constraints;
		return `value of ${propertyNameToMatch} doesn't match to ${propertyName}`;
	}
}
