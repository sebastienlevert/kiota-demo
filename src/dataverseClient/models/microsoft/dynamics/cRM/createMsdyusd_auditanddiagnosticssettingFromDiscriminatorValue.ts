import {Msdyusd_auditanddiagnosticssetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_auditanddiagnosticssettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_auditanddiagnosticssetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_auditanddiagnosticssetting();
}
