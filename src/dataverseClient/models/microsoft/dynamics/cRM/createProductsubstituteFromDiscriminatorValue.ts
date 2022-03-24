import {Productsubstitute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProductsubstituteFromDiscriminatorValue(parseNode: ParseNode | undefined) : Productsubstitute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Productsubstitute();
}
