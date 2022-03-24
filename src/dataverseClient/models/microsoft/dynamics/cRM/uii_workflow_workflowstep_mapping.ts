import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
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
import {createUii_workflowFromDiscriminatorValue} from './createUii_workflowFromDiscriminatorValue';
import {createUii_workflowstepFromDiscriminatorValue} from './createUii_workflowstepFromDiscriminatorValue';
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team, Uii_workflow, Uii_workflowstep} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Uii_workflow_workflowstep_mapping extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __uii_workflow_mappingid_value?: string | undefined;
    private __uii_workflowstep_mappingid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uii_sequence?: string | undefined;
    private _uii_workflow_mappingid?: Uii_workflow | undefined;
    private _uii_workflow_workflowstep_mapping_ActivityPointers?: Activitypointer[] | undefined;
    private _uii_workflow_workflowstep_mapping_Annotations?: Annotation[] | undefined;
    private _uii_workflow_workflowstep_mapping_Appointments?: Appointment[] | undefined;
    private _uii_workflow_workflowstep_mapping_AsyncOperations?: Asyncoperation[] | undefined;
    private _uii_workflow_workflowstep_mapping_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _uii_workflow_workflowstep_mapping_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _uii_workflow_workflowstep_mapping_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _uii_workflow_workflowstep_mapping_Emails?: Email[] | undefined;
    private _uii_workflow_workflowstep_mapping_Faxes?: Fax[] | undefined;
    private _uii_workflow_workflowstep_mapping_Letters?: Letter[] | undefined;
    private _uii_workflow_workflowstep_mapping_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _uii_workflow_workflowstep_mapping_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _uii_workflow_workflowstep_mapping_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _uii_workflow_workflowstep_mapping_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _uii_workflow_workflowstep_mapping_msfp_alerts?: Msfp_alert[] | undefined;
    private _uii_workflow_workflowstep_mapping_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _uii_workflow_workflowstep_mapping_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _uii_workflow_workflowstep_mapping_PhoneCalls?: Phonecall[] | undefined;
    private _uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _uii_workflow_workflowstep_mapping_ProcessSession?: Processsession[] | undefined;
    private _uii_workflow_workflowstep_mapping_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _uii_workflow_workflowstep_mapping_ServiceAppointments?: Serviceappointment[] | undefined;
    private _uii_workflow_workflowstep_mapping_SocialActivities?: Socialactivity[] | undefined;
    private _uii_workflow_workflowstep_mapping_SyncErrors?: Syncerror[] | undefined;
    private _uii_workflow_workflowstep_mapping_Tasks?: Task[] | undefined;
    private _uii_workflow_workflowstep_mappingid?: string | undefined;
    private _uii_workflowstep_mappingid?: Uii_workflowstep | undefined;
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
     * Gets the _uii_workflow_mappingid_value property value. 
     * @returns a string
     */
    public get _uii_workflow_mappingid_value() {
        return this.__uii_workflow_mappingid_value;
    };
    /**
     * Sets the _uii_workflow_mappingid_value property value. 
     * @param value Value to set for the _uii_workflow_mappingid_value property.
     */
    public set _uii_workflow_mappingid_value(value: string | undefined) {
        this.__uii_workflow_mappingid_value = value;
    };
    /**
     * Gets the _uii_workflowstep_mappingid_value property value. 
     * @returns a string
     */
    public get _uii_workflowstep_mappingid_value() {
        return this.__uii_workflowstep_mappingid_value;
    };
    /**
     * Sets the _uii_workflowstep_mappingid_value property value. 
     * @param value Value to set for the _uii_workflowstep_mappingid_value property.
     */
    public set _uii_workflowstep_mappingid_value(value: string | undefined) {
        this.__uii_workflowstep_mappingid_value = value;
    };
    /**
     * Instantiates a new uii_workflow_workflowstep_mapping and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._owninguser_value = n.getStringValue(); },
            "_uii_workflow_mappingid_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._uii_workflow_mappingid_value = n.getStringValue(); },
            "_uii_workflowstep_mappingid_value": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping)._uii_workflowstep_mappingid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).timezoneruleversionnumber = n.getNumberValue(); },
            "uii_sequence": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_sequence = n.getStringValue(); },
            "uii_workflow_mappingid": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_mappingid = n.getObjectValue<Uii_workflow>(createUii_workflowFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_ActivityPointers": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_Annotations": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_Appointments": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_AsyncOperations": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_BulkDeleteFailures": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_DuplicateBaseRecord": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_DuplicateMatchingRecord": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_Emails": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_Faxes": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_Letters": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_MailboxTrackingFolders": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_msdyn_approvals": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_msdyn_bookingalerts": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_msdyn_ocsessions": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_msfp_alerts": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_msfp_surveyinvites": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_msfp_surveyresponses": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_PhoneCalls": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_ProcessSession": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_RecurringAppointmentMasters": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_ServiceAppointments": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_SocialActivities": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_SyncErrors": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mapping_Tasks": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mapping_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "uii_workflow_workflowstep_mappingid": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflow_workflowstep_mappingid = n.getStringValue(); },
            "uii_workflowstep_mappingid": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).uii_workflowstep_mappingid = n.getObjectValue<Uii_workflowstep>(createUii_workflowstepFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Uii_workflow_workflowstep_mapping).versionnumber = n.getNumberValue(); },
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_uii_workflow_mappingid_value", this._uii_workflow_mappingid_value);
        writer.writeStringValue("_uii_workflowstep_mappingid_value", this._uii_workflowstep_mappingid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uii_sequence", this.uii_sequence);
        writer.writeObjectValue<Uii_workflow>("uii_workflow_mappingid", this.uii_workflow_mappingid);
        writer.writeCollectionOfObjectValues<Activitypointer>("uii_workflow_workflowstep_mapping_ActivityPointers", this.uii_workflow_workflowstep_mapping_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("uii_workflow_workflowstep_mapping_Annotations", this.uii_workflow_workflowstep_mapping_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("uii_workflow_workflowstep_mapping_Appointments", this.uii_workflow_workflowstep_mapping_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("uii_workflow_workflowstep_mapping_AsyncOperations", this.uii_workflow_workflowstep_mapping_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("uii_workflow_workflowstep_mapping_BulkDeleteFailures", this.uii_workflow_workflowstep_mapping_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("uii_workflow_workflowstep_mapping_DuplicateBaseRecord", this.uii_workflow_workflowstep_mapping_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("uii_workflow_workflowstep_mapping_DuplicateMatchingRecord", this.uii_workflow_workflowstep_mapping_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("uii_workflow_workflowstep_mapping_Emails", this.uii_workflow_workflowstep_mapping_Emails);
        writer.writeCollectionOfObjectValues<Fax>("uii_workflow_workflowstep_mapping_Faxes", this.uii_workflow_workflowstep_mapping_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("uii_workflow_workflowstep_mapping_Letters", this.uii_workflow_workflowstep_mapping_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("uii_workflow_workflowstep_mapping_MailboxTrackingFolders", this.uii_workflow_workflowstep_mapping_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("uii_workflow_workflowstep_mapping_msdyn_approvals", this.uii_workflow_workflowstep_mapping_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("uii_workflow_workflowstep_mapping_msdyn_bookingalerts", this.uii_workflow_workflowstep_mapping_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems", this.uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages", this.uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("uii_workflow_workflowstep_mapping_msdyn_ocsessions", this.uii_workflow_workflowstep_mapping_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("uii_workflow_workflowstep_mapping_msfp_alerts", this.uii_workflow_workflowstep_mapping_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("uii_workflow_workflowstep_mapping_msfp_surveyinvites", this.uii_workflow_workflowstep_mapping_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("uii_workflow_workflowstep_mapping_msfp_surveyresponses", this.uii_workflow_workflowstep_mapping_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("uii_workflow_workflowstep_mapping_PhoneCalls", this.uii_workflow_workflowstep_mapping_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses", this.uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("uii_workflow_workflowstep_mapping_ProcessSession", this.uii_workflow_workflowstep_mapping_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("uii_workflow_workflowstep_mapping_RecurringAppointmentMasters", this.uii_workflow_workflowstep_mapping_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("uii_workflow_workflowstep_mapping_ServiceAppointments", this.uii_workflow_workflowstep_mapping_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("uii_workflow_workflowstep_mapping_SocialActivities", this.uii_workflow_workflowstep_mapping_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("uii_workflow_workflowstep_mapping_SyncErrors", this.uii_workflow_workflowstep_mapping_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("uii_workflow_workflowstep_mapping_Tasks", this.uii_workflow_workflowstep_mapping_Tasks);
        writer.writeStringValue("uii_workflow_workflowstep_mappingid", this.uii_workflow_workflowstep_mappingid);
        writer.writeObjectValue<Uii_workflowstep>("uii_workflowstep_mappingid", this.uii_workflowstep_mappingid);
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
     * Gets the uii_sequence property value. 
     * @returns a string
     */
    public get uii_sequence() {
        return this._uii_sequence;
    };
    /**
     * Sets the uii_sequence property value. 
     * @param value Value to set for the uii_sequence property.
     */
    public set uii_sequence(value: string | undefined) {
        this._uii_sequence = value;
    };
    /**
     * Gets the uii_workflow_mappingid property value. 
     * @returns a uii_workflow
     */
    public get uii_workflow_mappingid() {
        return this._uii_workflow_mappingid;
    };
    /**
     * Sets the uii_workflow_mappingid property value. 
     * @param value Value to set for the uii_workflow_mappingid property.
     */
    public set uii_workflow_mappingid(value: Uii_workflow | undefined) {
        this._uii_workflow_mappingid = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get uii_workflow_workflowstep_mapping_ActivityPointers() {
        return this._uii_workflow_workflowstep_mapping_ActivityPointers;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_ActivityPointers property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_ActivityPointers property.
     */
    public set uii_workflow_workflowstep_mapping_ActivityPointers(value: Activitypointer[] | undefined) {
        this._uii_workflow_workflowstep_mapping_ActivityPointers = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_Annotations property value. 
     * @returns a annotation
     */
    public get uii_workflow_workflowstep_mapping_Annotations() {
        return this._uii_workflow_workflowstep_mapping_Annotations;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_Annotations property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_Annotations property.
     */
    public set uii_workflow_workflowstep_mapping_Annotations(value: Annotation[] | undefined) {
        this._uii_workflow_workflowstep_mapping_Annotations = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_Appointments property value. 
     * @returns a appointment
     */
    public get uii_workflow_workflowstep_mapping_Appointments() {
        return this._uii_workflow_workflowstep_mapping_Appointments;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_Appointments property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_Appointments property.
     */
    public set uii_workflow_workflowstep_mapping_Appointments(value: Appointment[] | undefined) {
        this._uii_workflow_workflowstep_mapping_Appointments = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get uii_workflow_workflowstep_mapping_AsyncOperations() {
        return this._uii_workflow_workflowstep_mapping_AsyncOperations;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_AsyncOperations property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_AsyncOperations property.
     */
    public set uii_workflow_workflowstep_mapping_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._uii_workflow_workflowstep_mapping_AsyncOperations = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get uii_workflow_workflowstep_mapping_BulkDeleteFailures() {
        return this._uii_workflow_workflowstep_mapping_BulkDeleteFailures;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_BulkDeleteFailures property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_BulkDeleteFailures property.
     */
    public set uii_workflow_workflowstep_mapping_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._uii_workflow_workflowstep_mapping_BulkDeleteFailures = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get uii_workflow_workflowstep_mapping_DuplicateBaseRecord() {
        return this._uii_workflow_workflowstep_mapping_DuplicateBaseRecord;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_DuplicateBaseRecord property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_DuplicateBaseRecord property.
     */
    public set uii_workflow_workflowstep_mapping_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._uii_workflow_workflowstep_mapping_DuplicateBaseRecord = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get uii_workflow_workflowstep_mapping_DuplicateMatchingRecord() {
        return this._uii_workflow_workflowstep_mapping_DuplicateMatchingRecord;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_DuplicateMatchingRecord property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_DuplicateMatchingRecord property.
     */
    public set uii_workflow_workflowstep_mapping_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._uii_workflow_workflowstep_mapping_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_Emails property value. 
     * @returns a email
     */
    public get uii_workflow_workflowstep_mapping_Emails() {
        return this._uii_workflow_workflowstep_mapping_Emails;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_Emails property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_Emails property.
     */
    public set uii_workflow_workflowstep_mapping_Emails(value: Email[] | undefined) {
        this._uii_workflow_workflowstep_mapping_Emails = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_Faxes property value. 
     * @returns a fax
     */
    public get uii_workflow_workflowstep_mapping_Faxes() {
        return this._uii_workflow_workflowstep_mapping_Faxes;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_Faxes property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_Faxes property.
     */
    public set uii_workflow_workflowstep_mapping_Faxes(value: Fax[] | undefined) {
        this._uii_workflow_workflowstep_mapping_Faxes = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_Letters property value. 
     * @returns a letter
     */
    public get uii_workflow_workflowstep_mapping_Letters() {
        return this._uii_workflow_workflowstep_mapping_Letters;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_Letters property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_Letters property.
     */
    public set uii_workflow_workflowstep_mapping_Letters(value: Letter[] | undefined) {
        this._uii_workflow_workflowstep_mapping_Letters = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get uii_workflow_workflowstep_mapping_MailboxTrackingFolders() {
        return this._uii_workflow_workflowstep_mapping_MailboxTrackingFolders;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_MailboxTrackingFolders property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_MailboxTrackingFolders property.
     */
    public set uii_workflow_workflowstep_mapping_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._uii_workflow_workflowstep_mapping_MailboxTrackingFolders = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get uii_workflow_workflowstep_mapping_msdyn_approvals() {
        return this._uii_workflow_workflowstep_mapping_msdyn_approvals;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_msdyn_approvals property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_msdyn_approvals property.
     */
    public set uii_workflow_workflowstep_mapping_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._uii_workflow_workflowstep_mapping_msdyn_approvals = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get uii_workflow_workflowstep_mapping_msdyn_bookingalerts() {
        return this._uii_workflow_workflowstep_mapping_msdyn_bookingalerts;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_msdyn_bookingalerts property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_msdyn_bookingalerts property.
     */
    public set uii_workflow_workflowstep_mapping_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._uii_workflow_workflowstep_mapping_msdyn_bookingalerts = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems() {
        return this._uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems property.
     */
    public set uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._uii_workflow_workflowstep_mapping_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages() {
        return this._uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages property.
     */
    public set uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._uii_workflow_workflowstep_mapping_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get uii_workflow_workflowstep_mapping_msdyn_ocsessions() {
        return this._uii_workflow_workflowstep_mapping_msdyn_ocsessions;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_msdyn_ocsessions property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_msdyn_ocsessions property.
     */
    public set uii_workflow_workflowstep_mapping_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._uii_workflow_workflowstep_mapping_msdyn_ocsessions = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get uii_workflow_workflowstep_mapping_msfp_alerts() {
        return this._uii_workflow_workflowstep_mapping_msfp_alerts;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_msfp_alerts property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_msfp_alerts property.
     */
    public set uii_workflow_workflowstep_mapping_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._uii_workflow_workflowstep_mapping_msfp_alerts = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get uii_workflow_workflowstep_mapping_msfp_surveyinvites() {
        return this._uii_workflow_workflowstep_mapping_msfp_surveyinvites;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_msfp_surveyinvites property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_msfp_surveyinvites property.
     */
    public set uii_workflow_workflowstep_mapping_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._uii_workflow_workflowstep_mapping_msfp_surveyinvites = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get uii_workflow_workflowstep_mapping_msfp_surveyresponses() {
        return this._uii_workflow_workflowstep_mapping_msfp_surveyresponses;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_msfp_surveyresponses property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_msfp_surveyresponses property.
     */
    public set uii_workflow_workflowstep_mapping_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._uii_workflow_workflowstep_mapping_msfp_surveyresponses = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get uii_workflow_workflowstep_mapping_PhoneCalls() {
        return this._uii_workflow_workflowstep_mapping_PhoneCalls;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_PhoneCalls property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_PhoneCalls property.
     */
    public set uii_workflow_workflowstep_mapping_PhoneCalls(value: Phonecall[] | undefined) {
        this._uii_workflow_workflowstep_mapping_PhoneCalls = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses() {
        return this._uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses property.
     */
    public set uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._uii_workflow_workflowstep_mapping_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_ProcessSession property value. 
     * @returns a processsession
     */
    public get uii_workflow_workflowstep_mapping_ProcessSession() {
        return this._uii_workflow_workflowstep_mapping_ProcessSession;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_ProcessSession property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_ProcessSession property.
     */
    public set uii_workflow_workflowstep_mapping_ProcessSession(value: Processsession[] | undefined) {
        this._uii_workflow_workflowstep_mapping_ProcessSession = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get uii_workflow_workflowstep_mapping_RecurringAppointmentMasters() {
        return this._uii_workflow_workflowstep_mapping_RecurringAppointmentMasters;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_RecurringAppointmentMasters property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_RecurringAppointmentMasters property.
     */
    public set uii_workflow_workflowstep_mapping_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._uii_workflow_workflowstep_mapping_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get uii_workflow_workflowstep_mapping_ServiceAppointments() {
        return this._uii_workflow_workflowstep_mapping_ServiceAppointments;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_ServiceAppointments property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_ServiceAppointments property.
     */
    public set uii_workflow_workflowstep_mapping_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._uii_workflow_workflowstep_mapping_ServiceAppointments = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get uii_workflow_workflowstep_mapping_SocialActivities() {
        return this._uii_workflow_workflowstep_mapping_SocialActivities;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_SocialActivities property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_SocialActivities property.
     */
    public set uii_workflow_workflowstep_mapping_SocialActivities(value: Socialactivity[] | undefined) {
        this._uii_workflow_workflowstep_mapping_SocialActivities = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_SyncErrors property value. 
     * @returns a syncerror
     */
    public get uii_workflow_workflowstep_mapping_SyncErrors() {
        return this._uii_workflow_workflowstep_mapping_SyncErrors;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_SyncErrors property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_SyncErrors property.
     */
    public set uii_workflow_workflowstep_mapping_SyncErrors(value: Syncerror[] | undefined) {
        this._uii_workflow_workflowstep_mapping_SyncErrors = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mapping_Tasks property value. 
     * @returns a task
     */
    public get uii_workflow_workflowstep_mapping_Tasks() {
        return this._uii_workflow_workflowstep_mapping_Tasks;
    };
    /**
     * Sets the uii_workflow_workflowstep_mapping_Tasks property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mapping_Tasks property.
     */
    public set uii_workflow_workflowstep_mapping_Tasks(value: Task[] | undefined) {
        this._uii_workflow_workflowstep_mapping_Tasks = value;
    };
    /**
     * Gets the uii_workflow_workflowstep_mappingid property value. 
     * @returns a string
     */
    public get uii_workflow_workflowstep_mappingid() {
        return this._uii_workflow_workflowstep_mappingid;
    };
    /**
     * Sets the uii_workflow_workflowstep_mappingid property value. 
     * @param value Value to set for the uii_workflow_workflowstep_mappingid property.
     */
    public set uii_workflow_workflowstep_mappingid(value: string | undefined) {
        this._uii_workflow_workflowstep_mappingid = value;
    };
    /**
     * Gets the uii_workflowstep_mappingid property value. 
     * @returns a uii_workflowstep
     */
    public get uii_workflowstep_mappingid() {
        return this._uii_workflowstep_mappingid;
    };
    /**
     * Sets the uii_workflowstep_mappingid property value. 
     * @param value Value to set for the uii_workflowstep_mappingid property.
     */
    public set uii_workflowstep_mappingid(value: Uii_workflowstep | undefined) {
        this._uii_workflowstep_mappingid = value;
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
