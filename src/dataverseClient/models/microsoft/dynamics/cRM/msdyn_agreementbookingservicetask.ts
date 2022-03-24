import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agreementbookingincidentFromDiscriminatorValue} from './createMsdyn_agreementbookingincidentFromDiscriminatorValue';
import {createMsdyn_agreementbookingsetupFromDiscriminatorValue} from './createMsdyn_agreementbookingsetupFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_inspectionFromDiscriminatorValue} from './createMsdyn_inspectionFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_servicetasktypeFromDiscriminatorValue} from './createMsdyn_servicetasktypeFromDiscriminatorValue';
import {createMsdyn_workorderservicetaskFromDiscriminatorValue} from './createMsdyn_workorderservicetaskFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createPhonecallFromDiscriminatorValue} from './createPhonecallFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRecurringappointmentmasterFromDiscriminatorValue} from './createRecurringappointmentmasterFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSocialactivityFromDiscriminatorValue} from './createSocialactivityFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_agreement, Msdyn_agreementbookingincident, Msdyn_agreementbookingsetup, Msdyn_approval, Msdyn_bookingalert, Msdyn_customerasset, Msdyn_inspection, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_servicetasktype, Msdyn_workorderservicetask, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_agreementbookingservicetask extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_agreement_value?: string | undefined;
    private __msdyn_agreementbookingincident_value?: string | undefined;
    private __msdyn_agreementbookingsetup_value?: string | undefined;
    private __msdyn_customerasset_value?: string | undefined;
    private __msdyn_inspection_value?: string | undefined;
    private __msdyn_tasktype_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_agreement?: Msdyn_agreement | undefined;
    private _msdyn_agreementbookingincident?: Msdyn_agreementbookingincident | undefined;
    private _msdyn_agreementbookingservicetask_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_agreementbookingservicetask_Annotations?: Annotation[] | undefined;
    private _msdyn_agreementbookingservicetask_Appointments?: Appointment[] | undefined;
    private _msdyn_agreementbookingservicetask_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_agreementbookingservicetask_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_agreementbookingservicetask_connections1?: Connection[] | undefined;
    private _msdyn_agreementbookingservicetask_connections2?: Connection[] | undefined;
    private _msdyn_agreementbookingservicetask_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementbookingservicetask_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_agreementbookingservicetask_Emails?: Email[] | undefined;
    private _msdyn_agreementbookingservicetask_Faxes?: Fax[] | undefined;
    private _msdyn_agreementbookingservicetask_Letters?: Letter[] | undefined;
    private _msdyn_agreementbookingservicetask_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_agreementbookingservicetask_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_agreementbookingservicetask_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_agreementbookingservicetask_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_agreementbookingservicetask_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_agreementbookingservicetask_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_agreementbookingservicetask_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_agreementbookingservicetask_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_agreementbookingservicetask_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_agreementbookingservicetask_ProcessSession?: Processsession[] | undefined;
    private _msdyn_agreementbookingservicetask_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_agreementbookingservicetask_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_agreementbookingservicetask_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_agreementbookingservicetask_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_agreementbookingservicetask_Tasks?: Task[] | undefined;
    private _msdyn_agreementbookingservicetaskid?: string | undefined;
    private _msdyn_agreementbookingsetup?: Msdyn_agreementbookingsetup | undefined;
    private _msdyn_customerasset?: Msdyn_customerasset | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_estimatedduration?: number | undefined;
    private _msdyn_Inspection?: Msdyn_inspection | undefined;
    private _msdyn_inspectionenabled?: boolean | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _msdyn_iscopied?: boolean | undefined;
    private _msdyn_lineorder?: number | undefined;
    private _msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask?: Msdyn_workorderservicetask[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_tasktype?: Msdyn_servicetasktype | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _msdyn_agreementbookingincident_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementbookingincident_value() {
        return this.__msdyn_agreementbookingincident_value;
    };
    /**
     * Sets the _msdyn_agreementbookingincident_value property value. 
     * @param value Value to set for the _msdyn_agreementbookingincident_value property.
     */
    public set _msdyn_agreementbookingincident_value(value: string | undefined) {
        this.__msdyn_agreementbookingincident_value = value;
    };
    /**
     * Gets the _msdyn_agreementbookingsetup_value property value. 
     * @returns a string
     */
    public get _msdyn_agreementbookingsetup_value() {
        return this.__msdyn_agreementbookingsetup_value;
    };
    /**
     * Sets the _msdyn_agreementbookingsetup_value property value. 
     * @param value Value to set for the _msdyn_agreementbookingsetup_value property.
     */
    public set _msdyn_agreementbookingsetup_value(value: string | undefined) {
        this.__msdyn_agreementbookingsetup_value = value;
    };
    /**
     * Gets the _msdyn_customerasset_value property value. 
     * @returns a string
     */
    public get _msdyn_customerasset_value() {
        return this.__msdyn_customerasset_value;
    };
    /**
     * Sets the _msdyn_customerasset_value property value. 
     * @param value Value to set for the _msdyn_customerasset_value property.
     */
    public set _msdyn_customerasset_value(value: string | undefined) {
        this.__msdyn_customerasset_value = value;
    };
    /**
     * Gets the _msdyn_inspection_value property value. 
     * @returns a string
     */
    public get _msdyn_inspection_value() {
        return this.__msdyn_inspection_value;
    };
    /**
     * Sets the _msdyn_inspection_value property value. 
     * @param value Value to set for the _msdyn_inspection_value property.
     */
    public set _msdyn_inspection_value(value: string | undefined) {
        this.__msdyn_inspection_value = value;
    };
    /**
     * Gets the _msdyn_tasktype_value property value. 
     * @returns a string
     */
    public get _msdyn_tasktype_value() {
        return this.__msdyn_tasktype_value;
    };
    /**
     * Sets the _msdyn_tasktype_value property value. 
     * @param value Value to set for the _msdyn_tasktype_value property.
     */
    public set _msdyn_tasktype_value(value: string | undefined) {
        this.__msdyn_tasktype_value = value;
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
     * Instantiates a new msdyn_agreementbookingservicetask and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_agreement_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._msdyn_agreement_value = n.getStringValue(); },
            "_msdyn_agreementbookingincident_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._msdyn_agreementbookingincident_value = n.getStringValue(); },
            "_msdyn_agreementbookingsetup_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._msdyn_agreementbookingsetup_value = n.getStringValue(); },
            "_msdyn_customerasset_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._msdyn_customerasset_value = n.getStringValue(); },
            "_msdyn_inspection_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._msdyn_inspection_value = n.getStringValue(); },
            "_msdyn_tasktype_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._msdyn_tasktype_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_agreement": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "msdyn_agreementbookingincident": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingincident = n.getObjectValue<Msdyn_agreementbookingincident>(createMsdyn_agreementbookingincidentFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_ActivityPointers": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_Annotations": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_Appointments": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_AsyncOperations": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_connections1": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_connections2": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_Emails": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_Faxes": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_Letters": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_msfp_alerts": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_PhoneCalls": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_ProcessSession": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_SocialActivities": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_SyncErrors": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetask_Tasks": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetask_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_agreementbookingservicetaskid": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingservicetaskid = n.getStringValue(); },
            "msdyn_agreementbookingsetup": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_agreementbookingsetup = n.getObjectValue<Msdyn_agreementbookingsetup>(createMsdyn_agreementbookingsetupFromDiscriminatorValue); },
            "msdyn_customerasset": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_customerasset = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_description = n.getStringValue(); },
            "msdyn_estimatedduration": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_estimatedduration = n.getNumberValue(); },
            "msdyn_Inspection": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_Inspection = n.getObjectValue<Msdyn_inspection>(createMsdyn_inspectionFromDiscriminatorValue); },
            "msdyn_inspectionenabled": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_inspectionenabled = n.getBooleanValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_internalflags = n.getStringValue(); },
            "msdyn_iscopied": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_iscopied = n.getBooleanValue(); },
            "msdyn_lineorder": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_lineorder = n.getNumberValue(); },
            "msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask = n.getCollectionOfObjectValues<Msdyn_workorderservicetask>(createMsdyn_workorderservicetaskFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_name = n.getStringValue(); },
            "msdyn_tasktype": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).msdyn_tasktype = n.getObjectValue<Msdyn_servicetasktype>(createMsdyn_servicetasktypeFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_agreementbookingservicetask).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_agreementbookingincident property value. 
     * @returns a msdyn_agreementbookingincident
     */
    public get msdyn_agreementbookingincident() {
        return this._msdyn_agreementbookingincident;
    };
    /**
     * Sets the msdyn_agreementbookingincident property value. 
     * @param value Value to set for the msdyn_agreementbookingincident property.
     */
    public set msdyn_agreementbookingincident(value: Msdyn_agreementbookingincident | undefined) {
        this._msdyn_agreementbookingincident = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_agreementbookingservicetask_ActivityPointers() {
        return this._msdyn_agreementbookingservicetask_ActivityPointers;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_ActivityPointers property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_ActivityPointers property.
     */
    public set msdyn_agreementbookingservicetask_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_agreementbookingservicetask_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_agreementbookingservicetask_Annotations() {
        return this._msdyn_agreementbookingservicetask_Annotations;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_Annotations property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_Annotations property.
     */
    public set msdyn_agreementbookingservicetask_Annotations(value: Annotation[] | undefined) {
        this._msdyn_agreementbookingservicetask_Annotations = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_agreementbookingservicetask_Appointments() {
        return this._msdyn_agreementbookingservicetask_Appointments;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_Appointments property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_Appointments property.
     */
    public set msdyn_agreementbookingservicetask_Appointments(value: Appointment[] | undefined) {
        this._msdyn_agreementbookingservicetask_Appointments = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_agreementbookingservicetask_AsyncOperations() {
        return this._msdyn_agreementbookingservicetask_AsyncOperations;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_AsyncOperations property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_AsyncOperations property.
     */
    public set msdyn_agreementbookingservicetask_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_agreementbookingservicetask_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_agreementbookingservicetask_BulkDeleteFailures() {
        return this._msdyn_agreementbookingservicetask_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_BulkDeleteFailures property.
     */
    public set msdyn_agreementbookingservicetask_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_agreementbookingservicetask_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_agreementbookingservicetask_connections1() {
        return this._msdyn_agreementbookingservicetask_connections1;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_connections1 property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_connections1 property.
     */
    public set msdyn_agreementbookingservicetask_connections1(value: Connection[] | undefined) {
        this._msdyn_agreementbookingservicetask_connections1 = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_agreementbookingservicetask_connections2() {
        return this._msdyn_agreementbookingservicetask_connections2;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_connections2 property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_connections2 property.
     */
    public set msdyn_agreementbookingservicetask_connections2(value: Connection[] | undefined) {
        this._msdyn_agreementbookingservicetask_connections2 = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementbookingservicetask_DuplicateBaseRecord() {
        return this._msdyn_agreementbookingservicetask_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_DuplicateBaseRecord property.
     */
    public set msdyn_agreementbookingservicetask_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementbookingservicetask_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_agreementbookingservicetask_DuplicateMatchingRecord() {
        return this._msdyn_agreementbookingservicetask_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_DuplicateMatchingRecord property.
     */
    public set msdyn_agreementbookingservicetask_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_agreementbookingservicetask_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_Emails property value. 
     * @returns a email
     */
    public get msdyn_agreementbookingservicetask_Emails() {
        return this._msdyn_agreementbookingservicetask_Emails;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_Emails property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_Emails property.
     */
    public set msdyn_agreementbookingservicetask_Emails(value: Email[] | undefined) {
        this._msdyn_agreementbookingservicetask_Emails = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_agreementbookingservicetask_Faxes() {
        return this._msdyn_agreementbookingservicetask_Faxes;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_Faxes property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_Faxes property.
     */
    public set msdyn_agreementbookingservicetask_Faxes(value: Fax[] | undefined) {
        this._msdyn_agreementbookingservicetask_Faxes = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_Letters property value. 
     * @returns a letter
     */
    public get msdyn_agreementbookingservicetask_Letters() {
        return this._msdyn_agreementbookingservicetask_Letters;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_Letters property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_Letters property.
     */
    public set msdyn_agreementbookingservicetask_Letters(value: Letter[] | undefined) {
        this._msdyn_agreementbookingservicetask_Letters = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_agreementbookingservicetask_MailboxTrackingFolders() {
        return this._msdyn_agreementbookingservicetask_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_MailboxTrackingFolders property.
     */
    public set msdyn_agreementbookingservicetask_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_agreementbookingservicetask_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_agreementbookingservicetask_msdyn_approvals() {
        return this._msdyn_agreementbookingservicetask_msdyn_approvals;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_msdyn_approvals property.
     */
    public set msdyn_agreementbookingservicetask_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_agreementbookingservicetask_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_agreementbookingservicetask_msdyn_bookingalerts() {
        return this._msdyn_agreementbookingservicetask_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_msdyn_bookingalerts property.
     */
    public set msdyn_agreementbookingservicetask_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_agreementbookingservicetask_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_agreementbookingservicetask_msdyn_ocliveworkitems() {
        return this._msdyn_agreementbookingservicetask_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_msdyn_ocliveworkitems property.
     */
    public set msdyn_agreementbookingservicetask_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_agreementbookingservicetask_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages() {
        return this._msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages property.
     */
    public set msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_agreementbookingservicetask_msdyn_ocsessions() {
        return this._msdyn_agreementbookingservicetask_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_msdyn_ocsessions property.
     */
    public set msdyn_agreementbookingservicetask_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_agreementbookingservicetask_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_agreementbookingservicetask_msfp_alerts() {
        return this._msdyn_agreementbookingservicetask_msfp_alerts;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_msfp_alerts property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_msfp_alerts property.
     */
    public set msdyn_agreementbookingservicetask_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_agreementbookingservicetask_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_agreementbookingservicetask_msfp_surveyinvites() {
        return this._msdyn_agreementbookingservicetask_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_msfp_surveyinvites property.
     */
    public set msdyn_agreementbookingservicetask_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_agreementbookingservicetask_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_agreementbookingservicetask_msfp_surveyresponses() {
        return this._msdyn_agreementbookingservicetask_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_msfp_surveyresponses property.
     */
    public set msdyn_agreementbookingservicetask_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_agreementbookingservicetask_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_agreementbookingservicetask_PhoneCalls() {
        return this._msdyn_agreementbookingservicetask_PhoneCalls;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_PhoneCalls property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_PhoneCalls property.
     */
    public set msdyn_agreementbookingservicetask_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_agreementbookingservicetask_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses() {
        return this._msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_agreementbookingservicetask_ProcessSession() {
        return this._msdyn_agreementbookingservicetask_ProcessSession;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_ProcessSession property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_ProcessSession property.
     */
    public set msdyn_agreementbookingservicetask_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_agreementbookingservicetask_ProcessSession = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_agreementbookingservicetask_RecurringAppointmentMasters() {
        return this._msdyn_agreementbookingservicetask_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_RecurringAppointmentMasters property.
     */
    public set msdyn_agreementbookingservicetask_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_agreementbookingservicetask_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_agreementbookingservicetask_ServiceAppointments() {
        return this._msdyn_agreementbookingservicetask_ServiceAppointments;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_ServiceAppointments property.
     */
    public set msdyn_agreementbookingservicetask_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_agreementbookingservicetask_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_agreementbookingservicetask_SocialActivities() {
        return this._msdyn_agreementbookingservicetask_SocialActivities;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_SocialActivities property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_SocialActivities property.
     */
    public set msdyn_agreementbookingservicetask_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_agreementbookingservicetask_SocialActivities = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_agreementbookingservicetask_SyncErrors() {
        return this._msdyn_agreementbookingservicetask_SyncErrors;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_SyncErrors property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_SyncErrors property.
     */
    public set msdyn_agreementbookingservicetask_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_agreementbookingservicetask_SyncErrors = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetask_Tasks property value. 
     * @returns a task
     */
    public get msdyn_agreementbookingservicetask_Tasks() {
        return this._msdyn_agreementbookingservicetask_Tasks;
    };
    /**
     * Sets the msdyn_agreementbookingservicetask_Tasks property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetask_Tasks property.
     */
    public set msdyn_agreementbookingservicetask_Tasks(value: Task[] | undefined) {
        this._msdyn_agreementbookingservicetask_Tasks = value;
    };
    /**
     * Gets the msdyn_agreementbookingservicetaskid property value. 
     * @returns a string
     */
    public get msdyn_agreementbookingservicetaskid() {
        return this._msdyn_agreementbookingservicetaskid;
    };
    /**
     * Sets the msdyn_agreementbookingservicetaskid property value. 
     * @param value Value to set for the msdyn_agreementbookingservicetaskid property.
     */
    public set msdyn_agreementbookingservicetaskid(value: string | undefined) {
        this._msdyn_agreementbookingservicetaskid = value;
    };
    /**
     * Gets the msdyn_agreementbookingsetup property value. 
     * @returns a msdyn_agreementbookingsetup
     */
    public get msdyn_agreementbookingsetup() {
        return this._msdyn_agreementbookingsetup;
    };
    /**
     * Sets the msdyn_agreementbookingsetup property value. 
     * @param value Value to set for the msdyn_agreementbookingsetup property.
     */
    public set msdyn_agreementbookingsetup(value: Msdyn_agreementbookingsetup | undefined) {
        this._msdyn_agreementbookingsetup = value;
    };
    /**
     * Gets the msdyn_customerasset property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_customerasset() {
        return this._msdyn_customerasset;
    };
    /**
     * Sets the msdyn_customerasset property value. 
     * @param value Value to set for the msdyn_customerasset property.
     */
    public set msdyn_customerasset(value: Msdyn_customerasset | undefined) {
        this._msdyn_customerasset = value;
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
     * Gets the msdyn_Inspection property value. 
     * @returns a msdyn_inspection
     */
    public get msdyn_Inspection() {
        return this._msdyn_Inspection;
    };
    /**
     * Sets the msdyn_Inspection property value. 
     * @param value Value to set for the msdyn_Inspection property.
     */
    public set msdyn_Inspection(value: Msdyn_inspection | undefined) {
        this._msdyn_Inspection = value;
    };
    /**
     * Gets the msdyn_inspectionenabled property value. 
     * @returns a boolean
     */
    public get msdyn_inspectionenabled() {
        return this._msdyn_inspectionenabled;
    };
    /**
     * Sets the msdyn_inspectionenabled property value. 
     * @param value Value to set for the msdyn_inspectionenabled property.
     */
    public set msdyn_inspectionenabled(value: boolean | undefined) {
        this._msdyn_inspectionenabled = value;
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
     * Gets the msdyn_iscopied property value. 
     * @returns a boolean
     */
    public get msdyn_iscopied() {
        return this._msdyn_iscopied;
    };
    /**
     * Sets the msdyn_iscopied property value. 
     * @param value Value to set for the msdyn_iscopied property.
     */
    public set msdyn_iscopied(value: boolean | undefined) {
        this._msdyn_iscopied = value;
    };
    /**
     * Gets the msdyn_lineorder property value. 
     * @returns a integer
     */
    public get msdyn_lineorder() {
        return this._msdyn_lineorder;
    };
    /**
     * Sets the msdyn_lineorder property value. 
     * @param value Value to set for the msdyn_lineorder property.
     */
    public set msdyn_lineorder(value: number | undefined) {
        this._msdyn_lineorder = value;
    };
    /**
     * Gets the msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask property value. 
     * @returns a msdyn_workorderservicetask
     */
    public get msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask() {
        return this._msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask;
    };
    /**
     * Sets the msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask property value. 
     * @param value Value to set for the msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask property.
     */
    public set msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask(value: Msdyn_workorderservicetask[] | undefined) {
        this._msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask = value;
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
     * Gets the msdyn_tasktype property value. 
     * @returns a msdyn_servicetasktype
     */
    public get msdyn_tasktype() {
        return this._msdyn_tasktype;
    };
    /**
     * Sets the msdyn_tasktype property value. 
     * @param value Value to set for the msdyn_tasktype property.
     */
    public set msdyn_tasktype(value: Msdyn_servicetasktype | undefined) {
        this._msdyn_tasktype = value;
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
        writer.writeStringValue("_msdyn_agreementbookingincident_value", this._msdyn_agreementbookingincident_value);
        writer.writeStringValue("_msdyn_agreementbookingsetup_value", this._msdyn_agreementbookingsetup_value);
        writer.writeStringValue("_msdyn_customerasset_value", this._msdyn_customerasset_value);
        writer.writeStringValue("_msdyn_inspection_value", this._msdyn_inspection_value);
        writer.writeStringValue("_msdyn_tasktype_value", this._msdyn_tasktype_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_agreement>("msdyn_agreement", this.msdyn_agreement);
        writer.writeObjectValue<Msdyn_agreementbookingincident>("msdyn_agreementbookingincident", this.msdyn_agreementbookingincident);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_agreementbookingservicetask_ActivityPointers", this.msdyn_agreementbookingservicetask_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_agreementbookingservicetask_Annotations", this.msdyn_agreementbookingservicetask_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_agreementbookingservicetask_Appointments", this.msdyn_agreementbookingservicetask_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_agreementbookingservicetask_AsyncOperations", this.msdyn_agreementbookingservicetask_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_agreementbookingservicetask_BulkDeleteFailures", this.msdyn_agreementbookingservicetask_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementbookingservicetask_connections1", this.msdyn_agreementbookingservicetask_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_agreementbookingservicetask_connections2", this.msdyn_agreementbookingservicetask_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementbookingservicetask_DuplicateBaseRecord", this.msdyn_agreementbookingservicetask_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_agreementbookingservicetask_DuplicateMatchingRecord", this.msdyn_agreementbookingservicetask_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_agreementbookingservicetask_Emails", this.msdyn_agreementbookingservicetask_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_agreementbookingservicetask_Faxes", this.msdyn_agreementbookingservicetask_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_agreementbookingservicetask_Letters", this.msdyn_agreementbookingservicetask_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_agreementbookingservicetask_MailboxTrackingFolders", this.msdyn_agreementbookingservicetask_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_agreementbookingservicetask_msdyn_approvals", this.msdyn_agreementbookingservicetask_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_agreementbookingservicetask_msdyn_bookingalerts", this.msdyn_agreementbookingservicetask_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_agreementbookingservicetask_msdyn_ocliveworkitems", this.msdyn_agreementbookingservicetask_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages", this.msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_agreementbookingservicetask_msdyn_ocsessions", this.msdyn_agreementbookingservicetask_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_agreementbookingservicetask_msfp_alerts", this.msdyn_agreementbookingservicetask_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_agreementbookingservicetask_msfp_surveyinvites", this.msdyn_agreementbookingservicetask_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_agreementbookingservicetask_msfp_surveyresponses", this.msdyn_agreementbookingservicetask_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_agreementbookingservicetask_PhoneCalls", this.msdyn_agreementbookingservicetask_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses", this.msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_agreementbookingservicetask_ProcessSession", this.msdyn_agreementbookingservicetask_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_agreementbookingservicetask_RecurringAppointmentMasters", this.msdyn_agreementbookingservicetask_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_agreementbookingservicetask_ServiceAppointments", this.msdyn_agreementbookingservicetask_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_agreementbookingservicetask_SocialActivities", this.msdyn_agreementbookingservicetask_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_agreementbookingservicetask_SyncErrors", this.msdyn_agreementbookingservicetask_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_agreementbookingservicetask_Tasks", this.msdyn_agreementbookingservicetask_Tasks);
        writer.writeStringValue("msdyn_agreementbookingservicetaskid", this.msdyn_agreementbookingservicetaskid);
        writer.writeObjectValue<Msdyn_agreementbookingsetup>("msdyn_agreementbookingsetup", this.msdyn_agreementbookingsetup);
        writer.writeObjectValue<Msdyn_customerasset>("msdyn_customerasset", this.msdyn_customerasset);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_estimatedduration", this.msdyn_estimatedduration);
        writer.writeObjectValue<Msdyn_inspection>("msdyn_Inspection", this.msdyn_Inspection);
        writer.writeBooleanValue("msdyn_inspectionenabled", this.msdyn_inspectionenabled);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeBooleanValue("msdyn_iscopied", this.msdyn_iscopied);
        writer.writeNumberValue("msdyn_lineorder", this.msdyn_lineorder);
        writer.writeCollectionOfObjectValues<Msdyn_workorderservicetask>("msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask", this.msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_servicetasktype>("msdyn_tasktype", this.msdyn_tasktype);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
