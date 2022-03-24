import {Msfp_localizedemailtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_localizedemailtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_localizedemailtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_localizedemailtemplate();
}
