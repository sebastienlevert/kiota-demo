import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementbookingdateFromDiscriminatorValue} from './createMsdyn_agreementbookingdateFromDiscriminatorValue';
import {createMsdyn_agreementbookingincidentFromDiscriminatorValue} from './createMsdyn_agreementbookingincidentFromDiscriminatorValue';
import {createMsdyn_agreementbookingproductFromDiscriminatorValue} from './createMsdyn_agreementbookingproductFromDiscriminatorValue';
import {createMsdyn_agreementbookingserviceFromDiscriminatorValue} from './createMsdyn_agreementbookingserviceFromDiscriminatorValue';
import {createMsdyn_agreementbookingservicetaskFromDiscriminatorValue} from './createMsdyn_agreementbookingservicetaskFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue} from './createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_priorityFromDiscriminatorValue} from './createMsdyn_priorityFromDiscriminatorValue';
import {createMsdyn_workordertypeFromDiscriminatorValue} from './createMsdyn_workordertypeFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_agreement, Msdyn_agreementbookingdate, Msdyn_agreementbookingincident, Msdyn_agreementbookingproduct, Msdyn_agreementbookingservice, Msdyn_agreementbookingservicetask, Msdyn_approval, Msdyn_bookingalert, Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_priority, Msdyn_workordertype, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Processstage, Queueitem, Recurringappointmentmaster, Serviceappointment, Sharepointdocumentlocation, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_agreementbookingsetup extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __msdyn_preferredresource_value?: string | undefined;
    private __msdyn_priority_value?: string | undefined;
    private __msdyn_workordertype_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private _bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3?: Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_agreement?: Msdyn_agreement | undefined;
    private _msdyn_agreementbookingsetup_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_agreementbookingsetup_Annotations?: Annotation[] | undefined;
    private _msdyn_agreementbookingsetup_Appointments?: Appointment[] | undefined;
    private _msdyn_agreementbookingsetup_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_agreementbookingsetup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_agreementbookingsetup_connections1?: Connection[] | undefined;
    private _msdyn_agreementbookingsetup_connections2?: Connection[] | undefined;
    private _msdyn_agreementbookingsetup_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementbookingsetup_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementbookingsetup_Emails?: Email[] | undefined;
    private _msdyn_agreementbookingsetup_Faxes?: Fax[] | undefined;
    private _msdyn_agreementbookingsetup_Letters?: Letter[] | undefined;
    private _msdyn_agreementbookingsetup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_agreementbookingsetup_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_agreementbookingsetup_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_agreementbookingsetup_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_agreementbookingsetup_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_agreementbookingsetup_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_agreementbookingsetup_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_agreementbookingsetup_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_agreementbookingsetup_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_agreementbookingsetup_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_agreementbookingsetup_ProcessSession?: Processsession[] | undefined;
    private _msdyn_agreementbookingsetup_QueueItems?: Queueitem[] | undefined;
    private _msdyn_agreementbookingsetup_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_agreementbookingsetup_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_agreementbookingsetup_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_agreementbookingsetup_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_agreementbookingsetup_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_agreementbookingsetup_Tasks?: Task[] | undefined;
    private _msdyn_agreementbookingsetupid?: string | undefined;
    private _msdyn_autogeneratebooking?: boolean | undefined;
    private _msdyn_autogeneratewo?: boolean | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_estimatedduration?: number | undefined;
    private _msdyn_generatewodaysinadvance?: number | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_latitude?: number | undefined;
    private _msdyn_longitude?: number | undefined;
    private _msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup?: Msdyn_agreementbookingdate[] | undefined;
    private _msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup?: Msdyn_agreementbookingincident[] | undefined;
    private _msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup?: Msdyn_agreementbookingproduct[] | undefined;
    private _msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup?: Msdyn_agreementbookingservice[] | undefined;
    private _msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup?: Msdyn_agreementbookingservicetask[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_postbookingflexibility?: number | undefined;
    private _msdyn_postponegenerationuntil?: Date | undefined;
    private _msdyn_prebookingflexibility?: number | undefined;
    private _msdyn_preferredresource?: Bookableresource | undefined;
    private _msdyn_preferredstarttime?: Date | undefined;
    private _msdyn_priority?: Msdyn_priority | undefined;
    private _msdyn_processstartedon?: Date | undefined;
    private _msdyn_recurrencesettings?: string | undefined;
    private _msdyn_revision?: number | undefined;
    private _msdyn_timewindowend?: Date | undefined;
    private _msdyn_timewindowstart?: Date | undefined;
    private _msdyn_worklocation?: number | undefined;
    private _msdyn_workordersummary?: string | undefined;
    private _msdyn_workordertype?: Msdyn_workordertype | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_agreement_value property value. 
     * @returns a string
     */
    public get _msdyn_agreement_value() {
        return this.__msdyn_agreement_value;
    };
    /**
     * Sets the _msdyn_agreement_value property value. 
     * @param value Value to set for the _msdyn_agreement_value property.
     */
    public set _msdyn_agreement_value(value: string | undefined) {
        this.__msdyn_agreement_value = value;
    };
    /**
     * Gets the _msdyn_preferredresource_value property value. 
     * @returns a string
     */
    public get _msdyn_preferredresource_value() {
        return this.__msdyn_preferredresource_value;
    };
    /**
     * Sets the _msdyn_preferredresource_value property value. 
     * @param value Value to set for the _msdyn_preferredresource_value property.
     */
    public set _msdyn_preferredresource_value(value: string | undefined) {
        this.__msdyn_preferredresource_value = value;
    };
    /**
     * Gets the _msdyn_priority_value property value. 
     * @returns a string
     */
    public get _msdyn_priority_value() {
        return this.__msdyn_priority_value;
    };
    /**
     * Sets the _msdyn_priority_value property value. 
     * @param value Value to set for the _msdyn_priority_value property.
     */
    public set _msdyn_priority_value(value: string | undefined) {
        this.__msdyn_priority_value = value;
    };
    /**
     * Gets the _msdyn_workordertype_value property value. 
     * @returns a string
     */
    public get _msdyn_workordertype_value() {
        return this.__msdyn_workordertype_value;
    };
    /**
     * Sets the _msdyn_workordertype_value property value. 
     * @param value Value to set for the _msdyn_workordertype_value property.
     */
    public set _msdyn_workordertype_value(value: string | undefined) {
        this.__msdyn_workordertype_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _stageid_value property value. 
     * @returns a string
     */
    public get _stageid_value() {
        return this.__stageid_value;
    };
    /**
     * Sets the _stageid_value property value. 
     * @param value Value to set for the _stageid_value property.
     */
    public set _stageid_value(value: string | undefined) {
        this.__stageid_value = value;
    };
    /**
     * Gets the bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property value. 
     * @returns a msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3
     */
    public get bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3() {
        return this._bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3;
    };
    /**
     * Sets the bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property value. 
     * @param value Value to set for the bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 property.
     */
    public set bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3(value: Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[] | undefined) {
        this._bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = value;
    };
    /**
     * Instantiates a new msdyn_agreementbookingsetup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._msdyn_agreement_value = n.getStringValue(); },
            "_msdyn_preferredresource_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._msdyn_preferredresource_value = n.getStringValue(); },
            "_msdyn_priority_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._msdyn_priority_value = n.getStringValue(); },
            "_msdyn_workordertype_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._msdyn_workordertype_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup)._stageid_value = n.getStringValue(); },
            "bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = n.getCollectionOfObjectValues<Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3>(createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreement": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_ActivityPointers": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_Annotations": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_Appointments": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_AsyncOperations": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_connections1": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_connections2": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_Emails": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_Faxes": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_Letters": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_msfp_alerts": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_PhoneCalls": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_ProcessSession": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_QueueItems": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_SocialActivities": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_SyncErrors": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_agreementbookingsetup_Tasks": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetup_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_agreementbookingsetupid": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_agreementbookingsetupid = n.getStringValue(); },
            "msdyn_autogeneratebooking": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_autogeneratebooking = n.getBooleanValue(); },
            "msdyn_autogeneratewo": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_autogeneratewo = n.getBooleanValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_description = n.getStringValue(); },
            "msdyn_estimatedduration": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_estimatedduration = n.getNumberValue(); },
            "msdyn_generatewodaysinadvance": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_generatewodaysinadvance = n.getNumberValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_internalflags = n.getStringValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_latitude = n.getNumberValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_longitude = n.getNumberValue(); },
            "msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup = n.getCollectionOfObjectValues<Msdyn_agreementbookingdate>(createMsdyn_agreementbookingdateFromDiscriminatorValue); },
            "msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup = n.getCollectionOfObjectValues<Msdyn_agreementbookingincident>(createMsdyn_agreementbookingincidentFromDiscriminatorValue); },
            "msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup = n.getCollectionOfObjectValues<Msdyn_agreementbookingproduct>(createMsdyn_agreementbookingproductFromDiscriminatorValue); },
            "msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup = n.getCollectionOfObjectValues<Msdyn_agreementbookingservice>(createMsdyn_agreementbookingserviceFromDiscriminatorValue); },
            "msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup = n.getCollectionOfObjectValues<Msdyn_agreementbookingservicetask>(createMsdyn_agreementbookingservicetaskFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_name = n.getStringValue(); },
            "msdyn_postbookingflexibility": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_postbookingflexibility = n.getNumberValue(); },
            "msdyn_postponegenerationuntil": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_postponegenerationuntil = n.getDateValue(); },
            "msdyn_prebookingflexibility": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_prebookingflexibility = n.getNumberValue(); },
            "msdyn_preferredresource": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_preferredresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_preferredstarttime": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_preferredstarttime = n.getDateValue(); },
            "msdyn_priority": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_priority = n.getObjectValue<Msdyn_priority>(createMsdyn_priorityFromDiscriminatorValue); },
            "msdyn_processstartedon": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_processstartedon = n.getDateValue(); },
            "msdyn_recurrencesettings": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_recurrencesettings = n.getStringValue(); },
            "msdyn_revision": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_revision = n.getNumberValue(); },
            "msdyn_timewindowend": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_timewindowend = n.getDateValue(); },
            "msdyn_timewindowstart": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_timewindowstart = n.getDateValue(); },
            "msdyn_worklocation": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_worklocation = n.getNumberValue(); },
            "msdyn_workordersummary": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_workordersummary = n.getStringValue(); },
            "msdyn_workordertype": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).msdyn_workordertype = n.getObjectValue<Msdyn_workordertype>(createMsdyn_workordertypeFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_agreementbookingsetup).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_agreement property value. 
     * @returns a msdyn_agreement
     */
    public get msdyn_agreement() {
        return this._msdyn_agreement;
    };
    /**
     * Sets the msdyn_agreement property value. 
     * @param value Value to set for the msdyn_agreement property.
     */
    public set msdyn_agreement(value: Msdyn_agreement | undefined) {
        this._msdyn_agreement = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_agreementbookingsetup_ActivityPointers() {
        return this._msdyn_agreementbookingsetup_ActivityPointers;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_ActivityPointers property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_ActivityPointers property.
     */
    public set msdyn_agreementbookingsetup_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_agreementbookingsetup_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_agreementbookingsetup_Annotations() {
        return this._msdyn_agreementbookingsetup_Annotations;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_Annotations property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_Annotations property.
     */
    public set msdyn_agreementbookingsetup_Annotations(value: Annotation[] | undefined) {
        this._msdyn_agreementbookingsetup_Annotations = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_agreementbookingsetup_Appointments() {
        return this._msdyn_agreementbookingsetup_Appointments;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_Appointments property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_Appointments property.
     */
    public set msdyn_agreementbookingsetup_Appointments(value: Appointment[] | undefined) {
        this._msdyn_agreementbookingsetup_Appointments = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_agreementbookingsetup_AsyncOperations() {
        return this._msdyn_agreementbookingsetup_AsyncOperations;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_AsyncOperations property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_AsyncOperations property.
     */
    public set msdyn_agreementbookingsetup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_agreementbookingsetup_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_agreementbookingsetup_BulkDeleteFailures() {
        return this._msdyn_agreementbookingsetup_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_BulkDeleteFailures property.
     */
    public set msdyn_agreementbookingsetup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_agreementbookingsetup_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_agreementbookingsetup_connections1() {
        return this._msdyn_agreementbookingsetup_connections1;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_connections1 property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_connections1 property.
     */
    public set msdyn_agreementbookingsetup_connections1(value: Connection[] | undefined) {
        this._msdyn_agreementbookingsetup_connections1 = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_agreementbookingsetup_connections2() {
        return this._msdyn_agreementbookingsetup_connections2;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_connections2 property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_connections2 property.
     */
    public set msdyn_agreementbookingsetup_connections2(value: Connection[] | undefined) {
        this._msdyn_agreementbookingsetup_connections2 = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementbookingsetup_DuplicateBaseRecord() {
        return this._msdyn_agreementbookingsetup_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_DuplicateBaseRecord property.
     */
    public set msdyn_agreementbookingsetup_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementbookingsetup_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementbookingsetup_DuplicateMatchingRecord() {
        return this._msdyn_agreementbookingsetup_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_DuplicateMatchingRecord property.
     */
    public set msdyn_agreementbookingsetup_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementbookingsetup_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_Emails property value. 
     * @returns a email
     */
    public get msdyn_agreementbookingsetup_Emails() {
        return this._msdyn_agreementbookingsetup_Emails;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_Emails property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_Emails property.
     */
    public set msdyn_agreementbookingsetup_Emails(value: Email[] | undefined) {
        this._msdyn_agreementbookingsetup_Emails = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_agreementbookingsetup_Faxes() {
        return this._msdyn_agreementbookingsetup_Faxes;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_Faxes property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_Faxes property.
     */
    public set msdyn_agreementbookingsetup_Faxes(value: Fax[] | undefined) {
        this._msdyn_agreementbookingsetup_Faxes = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_Letters property value. 
     * @returns a letter
     */
    public get msdyn_agreementbookingsetup_Letters() {
        return this._msdyn_agreementbookingsetup_Letters;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_Letters property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_Letters property.
     */
    public set msdyn_agreementbookingsetup_Letters(value: Letter[] | undefined) {
        this._msdyn_agreementbookingsetup_Letters = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_agreementbookingsetup_MailboxTrackingFolders() {
        return this._msdyn_agreementbookingsetup_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_MailboxTrackingFolders property.
     */
    public set msdyn_agreementbookingsetup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_agreementbookingsetup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_agreementbookingsetup_msdyn_approvals() {
        return this._msdyn_agreementbookingsetup_msdyn_approvals;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_msdyn_approvals property.
     */
    public set msdyn_agreementbookingsetup_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_agreementbookingsetup_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_agreementbookingsetup_msdyn_bookingalerts() {
        return this._msdyn_agreementbookingsetup_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_msdyn_bookingalerts property.
     */
    public set msdyn_agreementbookingsetup_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_agreementbookingsetup_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_agreementbookingsetup_msdyn_ocliveworkitems() {
        return this._msdyn_agreementbookingsetup_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_msdyn_ocliveworkitems property.
     */
    public set msdyn_agreementbookingsetup_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_agreementbookingsetup_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_agreementbookingsetup_msdyn_ocoutboundmessages() {
        return this._msdyn_agreementbookingsetup_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_msdyn_ocoutboundmessages property.
     */
    public set msdyn_agreementbookingsetup_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_agreementbookingsetup_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_agreementbookingsetup_msdyn_ocsessions() {
        return this._msdyn_agreementbookingsetup_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_msdyn_ocsessions property.
     */
    public set msdyn_agreementbookingsetup_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_agreementbookingsetup_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_agreementbookingsetup_msfp_alerts() {
        return this._msdyn_agreementbookingsetup_msfp_alerts;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_msfp_alerts property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_msfp_alerts property.
     */
    public set msdyn_agreementbookingsetup_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_agreementbookingsetup_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_agreementbookingsetup_msfp_surveyinvites() {
        return this._msdyn_agreementbookingsetup_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_msfp_surveyinvites property.
     */
    public set msdyn_agreementbookingsetup_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_agreementbookingsetup_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_agreementbookingsetup_msfp_surveyresponses() {
        return this._msdyn_agreementbookingsetup_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_msfp_surveyresponses property.
     */
    public set msdyn_agreementbookingsetup_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_agreementbookingsetup_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_agreementbookingsetup_PhoneCalls() {
        return this._msdyn_agreementbookingsetup_PhoneCalls;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_PhoneCalls property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_PhoneCalls property.
     */
    public set msdyn_agreementbookingsetup_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_agreementbookingsetup_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses() {
        return this._msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_agreementbookingsetup_ProcessSession() {
        return this._msdyn_agreementbookingsetup_ProcessSession;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_ProcessSession property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_ProcessSession property.
     */
    public set msdyn_agreementbookingsetup_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_agreementbookingsetup_ProcessSession = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_agreementbookingsetup_QueueItems() {
        return this._msdyn_agreementbookingsetup_QueueItems;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_QueueItems property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_QueueItems property.
     */
    public set msdyn_agreementbookingsetup_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_agreementbookingsetup_QueueItems = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_agreementbookingsetup_RecurringAppointmentMasters() {
        return this._msdyn_agreementbookingsetup_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_RecurringAppointmentMasters property.
     */
    public set msdyn_agreementbookingsetup_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_agreementbookingsetup_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_agreementbookingsetup_ServiceAppointments() {
        return this._msdyn_agreementbookingsetup_ServiceAppointments;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_ServiceAppointments property.
     */
    public set msdyn_agreementbookingsetup_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_agreementbookingsetup_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_agreementbookingsetup_SharePointDocumentLocations() {
        return this._msdyn_agreementbookingsetup_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_SharePointDocumentLocations property.
     */
    public set msdyn_agreementbookingsetup_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_agreementbookingsetup_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_agreementbookingsetup_SocialActivities() {
        return this._msdyn_agreementbookingsetup_SocialActivities;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_SocialActivities property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_SocialActivities property.
     */
    public set msdyn_agreementbookingsetup_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_agreementbookingsetup_SocialActivities = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_agreementbookingsetup_SyncErrors() {
        return this._msdyn_agreementbookingsetup_SyncErrors;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_SyncErrors property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_SyncErrors property.
     */
    public set msdyn_agreementbookingsetup_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_agreementbookingsetup_SyncErrors = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup_Tasks property value. 
     * @returns a task
     */
    public get msdyn_agreementbookingsetup_Tasks() {
        return this._msdyn_agreementbookingsetup_Tasks;
    };
    /**
     * Sets the msdyn_agreementbookingsetup_Tasks property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup_Tasks property.
     */
    public set msdyn_agreementbookingsetup_Tasks(value: Task[] | undefined) {
        this._msdyn_agreementbookingsetup_Tasks = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetupid property value. 
     * @returns a string
     */
    public get msdyn_agreementbookingsetupid() {
        return this._msdyn_agreementbookingsetupid;
    };
    /**
     * Sets the msdyn_agreementbookingsetupid property value. 
     * @param value Value to set for the msdyn_agreementbookingsetupid property.
     */
    public set msdyn_agreementbookingsetupid(value: string | undefined) {
        this._msdyn_agreementbookingsetupid = value;
    };
    /**
     * Gets the msdyn_autogeneratebooking property value. 
     * @returns a boolean
     */
    public get msdyn_autogeneratebooking() {
        return this._msdyn_autogeneratebooking;
    };
    /**
     * Sets the msdyn_autogeneratebooking property value. 
     * @param value Value to set for the msdyn_autogeneratebooking property.
     */
    public set msdyn_autogeneratebooking(value: boolean | undefined) {
        this._msdyn_autogeneratebooking = value;
    };
    /**
     * Gets the msdyn_autogeneratewo property value. 
     * @returns a boolean
     */
    public get msdyn_autogeneratewo() {
        return this._msdyn_autogeneratewo;
    };
    /**
     * Sets the msdyn_autogeneratewo property value. 
     * @param value Value to set for the msdyn_autogeneratewo property.
     */
    public set msdyn_autogeneratewo(value: boolean | undefined) {
        this._msdyn_autogeneratewo = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_estimatedduration property value. 
     * @returns a integer
     */
    public get msdyn_estimatedduration() {
        return this._msdyn_estimatedduration;
    };
    /**
     * Sets the msdyn_estimatedduration property value. 
     * @param value Value to set for the msdyn_estimatedduration property.
     */
    public set msdyn_estimatedduration(value: number | undefined) {
        this._msdyn_estimatedduration = value;
    };
    /**
     * Gets the msdyn_generatewodaysinadvance property value. 
     * @returns a integer
     */
    public get msdyn_generatewodaysinadvance() {
        return this._msdyn_generatewodaysinadvance;
    };
    /**
     * Sets the msdyn_generatewodaysinadvance property value. 
     * @param value Value to set for the msdyn_generatewodaysinadvance property.
     */
    public set msdyn_generatewodaysinadvance(value: number | undefined) {
        this._msdyn_generatewodaysinadvance = value;
    };
    /**
     * Gets the msdyn_internalflags property value. 
     * @returns a string
     */
    public get msdyn_internalflags() {
        return this._msdyn_internalflags;
    };
    /**
     * Sets the msdyn_internalflags property value. 
     * @param value Value to set for the msdyn_internalflags property.
     */
    public set msdyn_internalflags(value: string | undefined) {
        this._msdyn_internalflags = value;
    };
    /**
     * Gets the msdyn_latitude property value. 
     * @returns a double
     */
    public get msdyn_latitude() {
        return this._msdyn_latitude;
    };
    /**
     * Sets the msdyn_latitude property value. 
     * @param value Value to set for the msdyn_latitude property.
     */
    public set msdyn_latitude(value: number | undefined) {
        this._msdyn_latitude = value;
    };
    /**
     * Gets the msdyn_longitude property value. 
     * @returns a double
     */
    public get msdyn_longitude() {
        return this._msdyn_longitude;
    };
    /**
     * Sets the msdyn_longitude property value. 
     * @param value Value to set for the msdyn_longitude property.
     */
    public set msdyn_longitude(value: number | undefined) {
        this._msdyn_longitude = value;
    };
    /**
     * Gets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup property value. 
     * @returns a msdyn_agreementbookingdate
     */
    public get msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup() {
        return this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup property.
     */
    public set msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup(value: Msdyn_agreementbookingdate[] | undefined) {
        this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup = value;
    };
    /**
     * Gets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup property value. 
     * @returns a msdyn_agreementbookingincident
     */
    public get msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup() {
        return this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup property.
     */
    public set msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup(value: Msdyn_agreementbookingincident[] | undefined) {
        this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup = value;
    };
    /**
     * Gets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup property value. 
     * @returns a msdyn_agreementbookingproduct
     */
    public get msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup() {
        return this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup property.
     */
    public set msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup(value: Msdyn_agreementbookingproduct[] | undefined) {
        this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup = value;
    };
    /**
     * Gets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup property value. 
     * @returns a msdyn_agreementbookingservice
     */
    public get msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup() {
        return this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup property.
     */
    public set msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup(value: Msdyn_agreementbookingservice[] | undefined) {
        this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup = value;
    };
    /**
     * Gets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup property value. 
     * @returns a msdyn_agreementbookingservicetask
     */
    public get msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup() {
        return this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup property.
     */
    public set msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup(value: Msdyn_agreementbookingservicetask[] | undefined) {
        this._msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_postbookingflexibility property value. 
     * @returns a integer
     */
    public get msdyn_postbookingflexibility() {
        return this._msdyn_postbookingflexibility;
    };
    /**
     * Sets the msdyn_postbookingflexibility property value. 
     * @param value Value to set for the msdyn_postbookingflexibility property.
     */
    public set msdyn_postbookingflexibility(value: number | undefined) {
        this._msdyn_postbookingflexibility = value;
    };
    /**
     * Gets the msdyn_postponegenerationuntil property value. 
     * @returns a Date
     */
    public get msdyn_postponegenerationuntil() {
        return this._msdyn_postponegenerationuntil;
    };
    /**
     * Sets the msdyn_postponegenerationuntil property value. 
     * @param value Value to set for the msdyn_postponegenerationuntil property.
     */
    public set msdyn_postponegenerationuntil(value: Date | undefined) {
        this._msdyn_postponegenerationuntil = value;
    };
    /**
     * Gets the msdyn_prebookingflexibility property value. 
     * @returns a integer
     */
    public get msdyn_prebookingflexibility() {
        return this._msdyn_prebookingflexibility;
    };
    /**
     * Sets the msdyn_prebookingflexibility property value. 
     * @param value Value to set for the msdyn_prebookingflexibility property.
     */
    public set msdyn_prebookingflexibility(value: number | undefined) {
        this._msdyn_prebookingflexibility = value;
    };
    /**
     * Gets the msdyn_preferredresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_preferredresource() {
        return this._msdyn_preferredresource;
    };
    /**
     * Sets the msdyn_preferredresource property value. 
     * @param value Value to set for the msdyn_preferredresource property.
     */
    public set msdyn_preferredresource(value: Bookableresource | undefined) {
        this._msdyn_preferredresource = value;
    };
    /**
     * Gets the msdyn_preferredstarttime property value. 
     * @returns a Date
     */
    public get msdyn_preferredstarttime() {
        return this._msdyn_preferredstarttime;
    };
    /**
     * Sets the msdyn_preferredstarttime property value. 
     * @param value Value to set for the msdyn_preferredstarttime property.
     */
    public set msdyn_preferredstarttime(value: Date | undefined) {
        this._msdyn_preferredstarttime = value;
    };
    /**
     * Gets the msdyn_priority property value. 
     * @returns a msdyn_priority
     */
    public get msdyn_priority() {
        return this._msdyn_priority;
    };
    /**
     * Sets the msdyn_priority property value. 
     * @param value Value to set for the msdyn_priority property.
     */
    public set msdyn_priority(value: Msdyn_priority | undefined) {
        this._msdyn_priority = value;
    };
    /**
     * Gets the msdyn_processstartedon property value. 
     * @returns a Date
     */
    public get msdyn_processstartedon() {
        return this._msdyn_processstartedon;
    };
    /**
     * Sets the msdyn_processstartedon property value. 
     * @param value Value to set for the msdyn_processstartedon property.
     */
    public set msdyn_processstartedon(value: Date | undefined) {
        this._msdyn_processstartedon = value;
    };
    /**
     * Gets the msdyn_recurrencesettings property value. 
     * @returns a string
     */
    public get msdyn_recurrencesettings() {
        return this._msdyn_recurrencesettings;
    };
    /**
     * Sets the msdyn_recurrencesettings property value. 
     * @param value Value to set for the msdyn_recurrencesettings property.
     */
    public set msdyn_recurrencesettings(value: string | undefined) {
        this._msdyn_recurrencesettings = value;
    };
    /**
     * Gets the msdyn_revision property value. 
     * @returns a integer
     */
    public get msdyn_revision() {
        return this._msdyn_revision;
    };
    /**
     * Sets the msdyn_revision property value. 
     * @param value Value to set for the msdyn_revision property.
     */
    public set msdyn_revision(value: number | undefined) {
        this._msdyn_revision = value;
    };
    /**
     * Gets the msdyn_timewindowend property value. 
     * @returns a Date
     */
    public get msdyn_timewindowend() {
        return this._msdyn_timewindowend;
    };
    /**
     * Sets the msdyn_timewindowend property value. 
     * @param value Value to set for the msdyn_timewindowend property.
     */
    public set msdyn_timewindowend(value: Date | undefined) {
        this._msdyn_timewindowend = value;
    };
    /**
     * Gets the msdyn_timewindowstart property value. 
     * @returns a Date
     */
    public get msdyn_timewindowstart() {
        return this._msdyn_timewindowstart;
    };
    /**
     * Sets the msdyn_timewindowstart property value. 
     * @param value Value to set for the msdyn_timewindowstart property.
     */
    public set msdyn_timewindowstart(value: Date | undefined) {
        this._msdyn_timewindowstart = value;
    };
    /**
     * Gets the msdyn_worklocation property value. 
     * @returns a integer
     */
    public get msdyn_worklocation() {
        return this._msdyn_worklocation;
    };
    /**
     * Sets the msdyn_worklocation property value. 
     * @param value Value to set for the msdyn_worklocation property.
     */
    public set msdyn_worklocation(value: number | undefined) {
        this._msdyn_worklocation = value;
    };
    /**
     * Gets the msdyn_workordersummary property value. 
     * @returns a string
     */
    public get msdyn_workordersummary() {
        return this._msdyn_workordersummary;
    };
    /**
     * Sets the msdyn_workordersummary property value. 
     * @param value Value to set for the msdyn_workordersummary property.
     */
    public set msdyn_workordersummary(value: string | undefined) {
        this._msdyn_workordersummary = value;
    };
    /**
     * Gets the msdyn_workordertype property value. 
     * @returns a msdyn_workordertype
     */
    public get msdyn_workordertype() {
        return this._msdyn_workordertype;
    };
    /**
     * Sets the msdyn_workordertype property value. 
     * @param value Value to set for the msdyn_workordertype property.
     */
    public set msdyn_workordertype(value: Msdyn_workordertype | undefined) {
        this._msdyn_workordertype = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_agreement_value", this._msdyn_agreement_value);
        writer.writeStringValue("_msdyn_preferredresource_value", this._msdyn_preferredresource_value);
        writer.writeStringValue("_msdyn_priority_value", this._msdyn_priority_value);
        writer.writeStringValue("_msdyn_workordertype_value", this._msdyn_workordertype_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3>("bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3", this.bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_agreement>("msdyn_agreement", this.msdyn_agreement);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_agreementbookingsetup_ActivityPointers", this.msdyn_agreementbookingsetup_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_agreementbookingsetup_Annotations", this.msdyn_agreementbookingsetup_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_agreementbookingsetup_Appointments", this.msdyn_agreementbookingsetup_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_agreementbookingsetup_AsyncOperations", this.msdyn_agreementbookingsetup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_agreementbookingsetup_BulkDeleteFailures", this.msdyn_agreementbookingsetup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementbookingsetup_connections1", this.msdyn_agreementbookingsetup_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementbookingsetup_connections2", this.msdyn_agreementbookingsetup_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementbookingsetup_DuplicateBaseRecord", this.msdyn_agreementbookingsetup_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementbookingsetup_DuplicateMatchingRecord", this.msdyn_agreementbookingsetup_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_agreementbookingsetup_Emails", this.msdyn_agreementbookingsetup_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_agreementbookingsetup_Faxes", this.msdyn_agreementbookingsetup_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_agreementbookingsetup_Letters", this.msdyn_agreementbookingsetup_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_agreementbookingsetup_MailboxTrackingFolders", this.msdyn_agreementbookingsetup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_agreementbookingsetup_msdyn_approvals", this.msdyn_agreementbookingsetup_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_agreementbookingsetup_msdyn_bookingalerts", this.msdyn_agreementbookingsetup_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_agreementbookingsetup_msdyn_ocliveworkitems", this.msdyn_agreementbookingsetup_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_agreementbookingsetup_msdyn_ocoutboundmessages", this.msdyn_agreementbookingsetup_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_agreementbookingsetup_msdyn_ocsessions", this.msdyn_agreementbookingsetup_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_agreementbookingsetup_msfp_alerts", this.msdyn_agreementbookingsetup_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_agreementbookingsetup_msfp_surveyinvites", this.msdyn_agreementbookingsetup_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_agreementbookingsetup_msfp_surveyresponses", this.msdyn_agreementbookingsetup_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_agreementbookingsetup_PhoneCalls", this.msdyn_agreementbookingsetup_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses", this.msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_agreementbookingsetup_ProcessSession", this.msdyn_agreementbookingsetup_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_agreementbookingsetup_QueueItems", this.msdyn_agreementbookingsetup_QueueItems);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_agreementbookingsetup_RecurringAppointmentMasters", this.msdyn_agreementbookingsetup_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_agreementbookingsetup_ServiceAppointments", this.msdyn_agreementbookingsetup_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_agreementbookingsetup_SharePointDocumentLocations", this.msdyn_agreementbookingsetup_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_agreementbookingsetup_SocialActivities", this.msdyn_agreementbookingsetup_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_agreementbookingsetup_SyncErrors", this.msdyn_agreementbookingsetup_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_agreementbookingsetup_Tasks", this.msdyn_agreementbookingsetup_Tasks);
        writer.writeStringValue("msdyn_agreementbookingsetupid", this.msdyn_agreementbookingsetupid);
        writer.writeBooleanValue("msdyn_autogeneratebooking", this.msdyn_autogeneratebooking);
        writer.writeBooleanValue("msdyn_autogeneratewo", this.msdyn_autogeneratewo);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_estimatedduration", this.msdyn_estimatedduration);
        writer.writeNumberValue("msdyn_generatewodaysinadvance", this.msdyn_generatewodaysinadvance);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeNumberValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeNumberValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeCollectionOfObjectValues<Msdyn_agreementbookingdate>("msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup", this.msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup);
        writer.writeCollectionOfObjectValues<Msdyn_agreementbookingincident>("msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup", this.msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup);
        writer.writeCollectionOfObjectValues<Msdyn_agreementbookingproduct>("msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup", this.msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup);
        writer.writeCollectionOfObjectValues<Msdyn_agreementbookingservice>("msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup", this.msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup);
        writer.writeCollectionOfObjectValues<Msdyn_agreementbookingservicetask>("msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup", this.msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_postbookingflexibility", this.msdyn_postbookingflexibility);
        writer.writeDateValue("msdyn_postponegenerationuntil", this.msdyn_postponegenerationuntil);
        writer.writeNumberValue("msdyn_prebookingflexibility", this.msdyn_prebookingflexibility);
        writer.writeObjectValue<Bookableresource>("msdyn_preferredresource", this.msdyn_preferredresource);
        writer.writeDateValue("msdyn_preferredstarttime", this.msdyn_preferredstarttime);
        writer.writeObjectValue<Msdyn_priority>("msdyn_priority", this.msdyn_priority);
        writer.writeDateValue("msdyn_processstartedon", this.msdyn_processstartedon);
        writer.writeStringValue("msdyn_recurrencesettings", this.msdyn_recurrencesettings);
        writer.writeNumberValue("msdyn_revision", this.msdyn_revision);
        writer.writeDateValue("msdyn_timewindowend", this.msdyn_timewindowend);
        writer.writeDateValue("msdyn_timewindowstart", this.msdyn_timewindowstart);
        writer.writeNumberValue("msdyn_worklocation", this.msdyn_worklocation);
        writer.writeStringValue("msdyn_workordersummary", this.msdyn_workordersummary);
        writer.writeObjectValue<Msdyn_workordertype>("msdyn_workordertype", this.msdyn_workordertype);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Processstage>("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a processstage
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: Processstage | undefined) {
        this._stageid = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
