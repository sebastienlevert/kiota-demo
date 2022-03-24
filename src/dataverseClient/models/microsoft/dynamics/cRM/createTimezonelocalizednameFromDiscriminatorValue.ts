import {Timezonelocalizedname} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimezonelocalizednameFromDiscriminatorValue(parseNode: ParseNode | undefined) : Timezonelocalizedname {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Timezonelocalizedname();
}
