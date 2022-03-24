import {Msfp_fileresponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_fileresponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_fileresponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_fileresponse();
}
