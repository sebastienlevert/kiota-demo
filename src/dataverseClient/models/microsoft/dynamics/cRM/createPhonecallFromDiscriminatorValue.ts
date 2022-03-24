import {Phonecall} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhonecallFromDiscriminatorValue(parseNode: ParseNode | undefined) : Phonecall {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Phonecall();
}
