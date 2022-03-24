import {Msfp_surveyreminder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsfp_surveyreminderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msfp_surveyreminder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msfp_surveyreminder();
}
