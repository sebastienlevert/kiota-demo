import {Uii_savedsession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_savedsessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_savedsession {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_savedsession();
}
