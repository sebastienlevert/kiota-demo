import {Slakpiinstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSlakpiinstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Slakpiinstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Slakpiinstance();
}
