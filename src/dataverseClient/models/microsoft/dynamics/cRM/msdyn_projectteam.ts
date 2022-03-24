import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcebookingheaderFromDiscriminatorValue} from './createBookableresourcebookingheaderFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createFaxFromDiscriminatorValue} from './createFaxFromDiscriminatorValue';
import {createLetterFromDiscriminatorValue} from './createLetterFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_findworkeventFromDiscriminatorValue} from './createMsdyn_findworkeventFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_projectteammembersignupFromDiscriminatorValue} from './createMsdyn_projectteammembersignupFromDiscriminatorValue';
import {createMsdyn_resourceassignmentFromDiscriminatorValue} from './createMsdyn_resourceassignmentFromDiscriminatorValue';
import {createMsdyn_resourcerequirementFromDiscriminatorValue} from './createMsdyn_resourcerequirementFromDiscriminatorValue';
import {createMsdyn_workhourtemplateFromDiscriminatorValue} from './createMsdyn_workhourtemplateFromDiscriminatorValue';
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
import {Activitypointer, Annotation, Appointment, Asyncoperation, Bookableresource, Bookableresourcebooking, Bookableresourcebookingheader, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Connection, Crmbaseentity, Duplicaterecord, Email, Fax, Letter, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_findworkevent, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msdyn_organizationalunit, Msdyn_project, Msdyn_projecttask, Msdyn_projectteammembersignup, Msdyn_resourceassignment, Msdyn_resourcerequirement, Msdyn_workhourtemplate, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Phonecall, Principal, Principalobjectattributeaccess, Processsession, Recurringappointmentmaster, Serviceappointment, Socialactivity, Syncerror, Systemuser, Task, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_projectteam extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresourceid_value?: string | undefined;
    private __msdyn_organizationalunit_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_resourcerequirementid_value?: string | undefined;
    private __msdyn_worktemplate_value?: string | undefined;
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
    private _msdyn_allocationmethod?: number | undefined;
    private _msdyn_applicantcount?: number | undefined;
    private _msdyn_applicantcount_date?: Date | undefined;
    private _msdyn_applicantcount_state?: number | undefined;
    private _msdyn_applicantsavailable?: boolean | undefined;
    private _msdyn_assignedhours?: number | undefined;
    private _msdyn_billingtype?: number | undefined;
    private _msdyn_bookableresourceid?: Bookableresource | undefined;
    private _msdyn_calendarid?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_from?: Date | undefined;
    private _msdyn_hardbookedhours?: number | undefined;
    private _msdyn_hours?: number | undefined;
    private _msdyn_hoursrequested?: number | undefined;
    private _msdyn_membershipstatus?: number | undefined;
    private _msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid?: Bookableresourcebooking[] | undefined;
    private _msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid?: Bookableresourcebookingheader[] | undefined;
    private _msdyn_msdyn_projectteam_msdyn_findworkevent_Work?: Msdyn_findworkevent[] | undefined;
    private _msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers?: Msdyn_projecttask[] | undefined;
    private _msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership?: Msdyn_projectteammembersignup[] | undefined;
    private _msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid?: Msdyn_resourceassignment[] | undefined;
    private _msdyn_msprojectclientid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_number?: number | undefined;
    private _msdyn_organizationalunit?: Msdyn_organizationalunit | undefined;
    private _msdyn_percentage?: number | undefined;
    private _msdyn_project?: Msdyn_project | undefined;
    private _msdyn_projectapprover?: boolean | undefined;
    private _msdyn_projectteam_ActivityPointers?: Activitypointer[] | undefined;
    private _msdyn_projectteam_Annotations?: Annotation[] | undefined;
    private _msdyn_projectteam_Appointments?: Appointment[] | undefined;
    private _msdyn_projectteam_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_projectteam_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_projectteam_connections1?: Connection[] | undefined;
    private _msdyn_projectteam_connections2?: Connection[] | undefined;
    private _msdyn_projectteam_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projectteam_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projectteam_Emails?: Email[] | undefined;
    private _msdyn_projectteam_Faxes?: Fax[] | undefined;
    private _msdyn_projectteam_Letters?: Letter[] | undefined;
    private _msdyn_projectteam_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_projectteam_msdyn_approvals?: Msdyn_approval[] | undefined;
    private _msdyn_projectteam_msdyn_bookingalerts?: Msdyn_bookingalert[] | undefined;
    private _msdyn_projectteam_msdyn_ocliveworkitems?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_projectteam_msdyn_ocoutboundmessages?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_projectteam_msdyn_ocsessions?: Msdyn_ocsession[] | undefined;
    private _msdyn_projectteam_msfp_alerts?: Msfp_alert[] | undefined;
    private _msdyn_projectteam_msfp_surveyinvites?: Msfp_surveyinvite[] | undefined;
    private _msdyn_projectteam_msfp_surveyresponses?: Msfp_surveyresponse[] | undefined;
    private _msdyn_projectteam_PhoneCalls?: Phonecall[] | undefined;
    private _msdyn_projectteam_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_projectteam_ProcessSession?: Processsession[] | undefined;
    private _msdyn_projectteam_RecurringAppointmentMasters?: Recurringappointmentmaster[] | undefined;
    private _msdyn_projectteam_ServiceAppointments?: Serviceappointment[] | undefined;
    private _msdyn_projectteam_SocialActivities?: Socialactivity[] | undefined;
    private _msdyn_projectteam_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_projectteam_Tasks?: Task[] | undefined;
    private _msdyn_projectteamid?: string | undefined;
    private _msdyn_requiredhours?: number | undefined;
    private _msdyn_resourcecategory?: Bookableresourcecategory | undefined;
    private _msdyn_resourcerequirementid?: Msdyn_resourcerequirement | undefined;
    private _msdyn_roledescription?: string | undefined;
    private _msdyn_softbookedhours?: number | undefined;
    private _msdyn_to?: Date | undefined;
    private _msdyn_worktemplate?: Msdyn_workhourtemplate | undefined;
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
     * Gets the _msdyn_bookableresourceid_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresourceid_value() {
        return this.__msdyn_bookableresourceid_value;
    };
    /**
     * Sets the _msdyn_bookableresourceid_value property value. 
     * @param value Value to set for the _msdyn_bookableresourceid_value property.
     */
    public set _msdyn_bookableresourceid_value(value: string | undefined) {
        this.__msdyn_bookableresourceid_value = value;
    };
    /**
     * Gets the _msdyn_organizationalunit_value property value. 
     * @returns a string
     */
    public get _msdyn_organizationalunit_value() {
        return this.__msdyn_organizationalunit_value;
    };
    /**
     * Sets the _msdyn_organizationalunit_value property value. 
     * @param value Value to set for the _msdyn_organizationalunit_value property.
     */
    public set _msdyn_organizationalunit_value(value: string | undefined) {
        this.__msdyn_organizationalunit_value = value;
    };
    /**
     * Gets the _msdyn_project_value property value. 
     * @returns a string
     */
    public get _msdyn_project_value() {
        return this.__msdyn_project_value;
    };
    /**
     * Sets the _msdyn_project_value property value. 
     * @param value Value to set for the _msdyn_project_value property.
     */
    public set _msdyn_project_value(value: string | undefined) {
        this.__msdyn_project_value = value;
    };
    /**
     * Gets the _msdyn_resourcecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategory_value() {
        return this.__msdyn_resourcecategory_value;
    };
    /**
     * Sets the _msdyn_resourcecategory_value property value. 
     * @param value Value to set for the _msdyn_resourcecategory_value property.
     */
    public set _msdyn_resourcecategory_value(value: string | undefined) {
        this.__msdyn_resourcecategory_value = value;
    };
    /**
     * Gets the _msdyn_resourcerequirementid_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcerequirementid_value() {
        return this.__msdyn_resourcerequirementid_value;
    };
    /**
     * Sets the _msdyn_resourcerequirementid_value property value. 
     * @param value Value to set for the _msdyn_resourcerequirementid_value property.
     */
    public set _msdyn_resourcerequirementid_value(value: string | undefined) {
        this.__msdyn_resourcerequirementid_value = value;
    };
    /**
     * Gets the _msdyn_worktemplate_value property value. 
     * @returns a string
     */
    public get _msdyn_worktemplate_value() {
        return this.__msdyn_worktemplate_value;
    };
    /**
     * Sets the _msdyn_worktemplate_value property value. 
     * @param value Value to set for the _msdyn_worktemplate_value property.
     */
    public set _msdyn_worktemplate_value(value: string | undefined) {
        this.__msdyn_worktemplate_value = value;
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
     * Instantiates a new msdyn_projectteam and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_projectteam)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projectteam)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_projectteam)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projectteam)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresourceid_value": (o, n) => { (o as unknown as Msdyn_projectteam)._msdyn_bookableresourceid_value = n.getStringValue(); },
            "_msdyn_organizationalunit_value": (o, n) => { (o as unknown as Msdyn_projectteam)._msdyn_organizationalunit_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_projectteam)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_projectteam)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_resourcerequirementid_value": (o, n) => { (o as unknown as Msdyn_projectteam)._msdyn_resourcerequirementid_value = n.getStringValue(); },
            "_msdyn_worktemplate_value": (o, n) => { (o as unknown as Msdyn_projectteam)._msdyn_worktemplate_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_projectteam)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_projectteam)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_projectteam)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_projectteam)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_projectteam).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_projectteam).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_projectteam).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_projectteam).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_projectteam).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_projectteam).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_projectteam).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_allocationmethod": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_allocationmethod = n.getNumberValue(); },
            "msdyn_applicantcount": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_applicantcount = n.getNumberValue(); },
            "msdyn_applicantcount_date": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_applicantcount_date = n.getDateValue(); },
            "msdyn_applicantcount_state": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_applicantcount_state = n.getNumberValue(); },
            "msdyn_applicantsavailable": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_applicantsavailable = n.getBooleanValue(); },
            "msdyn_assignedhours": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_assignedhours = n.getNumberValue(); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_bookableresourceid": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_bookableresourceid = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_calendarid": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_calendarid = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_description = n.getStringValue(); },
            "msdyn_from": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_from = n.getDateValue(); },
            "msdyn_hardbookedhours": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_hardbookedhours = n.getNumberValue(); },
            "msdyn_hours": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_hours = n.getNumberValue(); },
            "msdyn_hoursrequested": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_hoursrequested = n.getNumberValue(); },
            "msdyn_membershipstatus": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_membershipstatus = n.getNumberValue(); },
            "msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid = n.getCollectionOfObjectValues<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid = n.getCollectionOfObjectValues<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "msdyn_msdyn_projectteam_msdyn_findworkevent_Work": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_msdyn_projectteam_msdyn_findworkevent_Work = n.getCollectionOfObjectValues<Msdyn_findworkevent>(createMsdyn_findworkeventFromDiscriminatorValue); },
            "msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers = n.getCollectionOfObjectValues<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership = n.getCollectionOfObjectValues<Msdyn_projectteammembersignup>(createMsdyn_projectteammembersignupFromDiscriminatorValue); },
            "msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid = n.getCollectionOfObjectValues<Msdyn_resourceassignment>(createMsdyn_resourceassignmentFromDiscriminatorValue); },
            "msdyn_msprojectclientid": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_msprojectclientid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_name = n.getStringValue(); },
            "msdyn_number": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_number = n.getNumberValue(); },
            "msdyn_organizationalunit": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_organizationalunit = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_percentage": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_percentage = n.getNumberValue(); },
            "msdyn_project": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_projectapprover": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectapprover = n.getBooleanValue(); },
            "msdyn_projectteam_ActivityPointers": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_ActivityPointers = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "msdyn_projectteam_Annotations": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_projectteam_Appointments": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_Appointments = n.getCollectionOfObjectValues<Appointment>(createAppointmentFromDiscriminatorValue); },
            "msdyn_projectteam_AsyncOperations": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_projectteam_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_projectteam_connections1": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_projectteam_connections2": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_projectteam_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projectteam_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projectteam_Emails": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_Emails = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "msdyn_projectteam_Faxes": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_Faxes = n.getCollectionOfObjectValues<Fax>(createFaxFromDiscriminatorValue); },
            "msdyn_projectteam_Letters": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_Letters = n.getCollectionOfObjectValues<Letter>(createLetterFromDiscriminatorValue); },
            "msdyn_projectteam_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_projectteam_msdyn_approvals": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_msdyn_approvals = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_projectteam_msdyn_bookingalerts": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_msdyn_bookingalerts = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_projectteam_msdyn_ocliveworkitems": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_msdyn_ocliveworkitems = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_projectteam_msdyn_ocoutboundmessages": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_msdyn_ocoutboundmessages = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_projectteam_msdyn_ocsessions": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_msdyn_ocsessions = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_projectteam_msfp_alerts": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_msfp_alerts = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msdyn_projectteam_msfp_surveyinvites": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_msfp_surveyinvites = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msdyn_projectteam_msfp_surveyresponses": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_msfp_surveyresponses = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "msdyn_projectteam_PhoneCalls": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_PhoneCalls = n.getCollectionOfObjectValues<Phonecall>(createPhonecallFromDiscriminatorValue); },
            "msdyn_projectteam_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_projectteam_ProcessSession": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_projectteam_RecurringAppointmentMasters": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_RecurringAppointmentMasters = n.getCollectionOfObjectValues<Recurringappointmentmaster>(createRecurringappointmentmasterFromDiscriminatorValue); },
            "msdyn_projectteam_ServiceAppointments": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_ServiceAppointments = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "msdyn_projectteam_SocialActivities": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_SocialActivities = n.getCollectionOfObjectValues<Socialactivity>(createSocialactivityFromDiscriminatorValue); },
            "msdyn_projectteam_SyncErrors": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_projectteam_Tasks": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteam_Tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
            "msdyn_projectteamid": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_projectteamid = n.getStringValue(); },
            "msdyn_requiredhours": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_requiredhours = n.getNumberValue(); },
            "msdyn_resourcecategory": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_resourcecategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_resourcerequirementid": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_resourcerequirementid = n.getObjectValue<Msdyn_resourcerequirement>(createMsdyn_resourcerequirementFromDiscriminatorValue); },
            "msdyn_roledescription": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_roledescription = n.getStringValue(); },
            "msdyn_softbookedhours": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_softbookedhours = n.getNumberValue(); },
            "msdyn_to": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_to = n.getDateValue(); },
            "msdyn_worktemplate": (o, n) => { (o as unknown as Msdyn_projectteam).msdyn_worktemplate = n.getObjectValue<Msdyn_workhourtemplate>(createMsdyn_workhourtemplateFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_projectteam).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_projectteam).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_projectteam).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_projectteam).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_projectteam).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_projectteam).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_projectteam).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_projectteam).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_projectteam).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_projectteam).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_allocationmethod property value. 
     * @returns a integer
     */
    public get msdyn_allocationmethod() {
        return this._msdyn_allocationmethod;
    };
    /**
     * Sets the msdyn_allocationmethod property value. 
     * @param value Value to set for the msdyn_allocationmethod property.
     */
    public set msdyn_allocationmethod(value: number | undefined) {
        this._msdyn_allocationmethod = value;
    };
    /**
     * Gets the msdyn_applicantcount property value. 
     * @returns a integer
     */
    public get msdyn_applicantcount() {
        return this._msdyn_applicantcount;
    };
    /**
     * Sets the msdyn_applicantcount property value. 
     * @param value Value to set for the msdyn_applicantcount property.
     */
    public set msdyn_applicantcount(value: number | undefined) {
        this._msdyn_applicantcount = value;
    };
    /**
     * Gets the msdyn_applicantcount_date property value. 
     * @returns a Date
     */
    public get msdyn_applicantcount_date() {
        return this._msdyn_applicantcount_date;
    };
    /**
     * Sets the msdyn_applicantcount_date property value. 
     * @param value Value to set for the msdyn_applicantcount_date property.
     */
    public set msdyn_applicantcount_date(value: Date | undefined) {
        this._msdyn_applicantcount_date = value;
    };
    /**
     * Gets the msdyn_applicantcount_state property value. 
     * @returns a integer
     */
    public get msdyn_applicantcount_state() {
        return this._msdyn_applicantcount_state;
    };
    /**
     * Sets the msdyn_applicantcount_state property value. 
     * @param value Value to set for the msdyn_applicantcount_state property.
     */
    public set msdyn_applicantcount_state(value: number | undefined) {
        this._msdyn_applicantcount_state = value;
    };
    /**
     * Gets the msdyn_applicantsavailable property value. 
     * @returns a boolean
     */
    public get msdyn_applicantsavailable() {
        return this._msdyn_applicantsavailable;
    };
    /**
     * Sets the msdyn_applicantsavailable property value. 
     * @param value Value to set for the msdyn_applicantsavailable property.
     */
    public set msdyn_applicantsavailable(value: boolean | undefined) {
        this._msdyn_applicantsavailable = value;
    };
    /**
     * Gets the msdyn_assignedhours property value. 
     * @returns a int64
     */
    public get msdyn_assignedhours() {
        return this._msdyn_assignedhours;
    };
    /**
     * Sets the msdyn_assignedhours property value. 
     * @param value Value to set for the msdyn_assignedhours property.
     */
    public set msdyn_assignedhours(value: number | undefined) {
        this._msdyn_assignedhours = value;
    };
    /**
     * Gets the msdyn_billingtype property value. 
     * @returns a integer
     */
    public get msdyn_billingtype() {
        return this._msdyn_billingtype;
    };
    /**
     * Sets the msdyn_billingtype property value. 
     * @param value Value to set for the msdyn_billingtype property.
     */
    public set msdyn_billingtype(value: number | undefined) {
        this._msdyn_billingtype = value;
    };
    /**
     * Gets the msdyn_bookableresourceid property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresourceid() {
        return this._msdyn_bookableresourceid;
    };
    /**
     * Sets the msdyn_bookableresourceid property value. 
     * @param value Value to set for the msdyn_bookableresourceid property.
     */
    public set msdyn_bookableresourceid(value: Bookableresource | undefined) {
        this._msdyn_bookableresourceid = value;
    };
    /**
     * Gets the msdyn_calendarid property value. 
     * @returns a string
     */
    public get msdyn_calendarid() {
        return this._msdyn_calendarid;
    };
    /**
     * Sets the msdyn_calendarid property value. 
     * @param value Value to set for the msdyn_calendarid property.
     */
    public set msdyn_calendarid(value: string | undefined) {
        this._msdyn_calendarid = value;
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
     * Gets the msdyn_from property value. 
     * @returns a Date
     */
    public get msdyn_from() {
        return this._msdyn_from;
    };
    /**
     * Sets the msdyn_from property value. 
     * @param value Value to set for the msdyn_from property.
     */
    public set msdyn_from(value: Date | undefined) {
        this._msdyn_from = value;
    };
    /**
     * Gets the msdyn_hardbookedhours property value. 
     * @returns a int64
     */
    public get msdyn_hardbookedhours() {
        return this._msdyn_hardbookedhours;
    };
    /**
     * Sets the msdyn_hardbookedhours property value. 
     * @param value Value to set for the msdyn_hardbookedhours property.
     */
    public set msdyn_hardbookedhours(value: number | undefined) {
        this._msdyn_hardbookedhours = value;
    };
    /**
     * Gets the msdyn_hours property value. 
     * @returns a int64
     */
    public get msdyn_hours() {
        return this._msdyn_hours;
    };
    /**
     * Sets the msdyn_hours property value. 
     * @param value Value to set for the msdyn_hours property.
     */
    public set msdyn_hours(value: number | undefined) {
        this._msdyn_hours = value;
    };
    /**
     * Gets the msdyn_hoursrequested property value. 
     * @returns a double
     */
    public get msdyn_hoursrequested() {
        return this._msdyn_hoursrequested;
    };
    /**
     * Sets the msdyn_hoursrequested property value. 
     * @param value Value to set for the msdyn_hoursrequested property.
     */
    public set msdyn_hoursrequested(value: number | undefined) {
        this._msdyn_hoursrequested = value;
    };
    /**
     * Gets the msdyn_membershipstatus property value. 
     * @returns a integer
     */
    public get msdyn_membershipstatus() {
        return this._msdyn_membershipstatus;
    };
    /**
     * Sets the msdyn_membershipstatus property value. 
     * @param value Value to set for the msdyn_membershipstatus property.
     */
    public set msdyn_membershipstatus(value: number | undefined) {
        this._msdyn_membershipstatus = value;
    };
    /**
     * Gets the msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid property value. 
     * @returns a bookableresourcebooking
     */
    public get msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid() {
        return this._msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid;
    };
    /**
     * Sets the msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid property value. 
     * @param value Value to set for the msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid property.
     */
    public set msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid(value: Bookableresourcebooking[] | undefined) {
        this._msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid = value;
    };
    /**
     * Gets the msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid property value. 
     * @returns a bookableresourcebookingheader
     */
    public get msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid() {
        return this._msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid;
    };
    /**
     * Sets the msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid property value. 
     * @param value Value to set for the msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid property.
     */
    public set msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid(value: Bookableresourcebookingheader[] | undefined) {
        this._msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid = value;
    };
    /**
     * Gets the msdyn_msdyn_projectteam_msdyn_findworkevent_Work property value. 
     * @returns a msdyn_findworkevent
     */
    public get msdyn_msdyn_projectteam_msdyn_findworkevent_Work() {
        return this._msdyn_msdyn_projectteam_msdyn_findworkevent_Work;
    };
    /**
     * Sets the msdyn_msdyn_projectteam_msdyn_findworkevent_Work property value. 
     * @param value Value to set for the msdyn_msdyn_projectteam_msdyn_findworkevent_Work property.
     */
    public set msdyn_msdyn_projectteam_msdyn_findworkevent_Work(value: Msdyn_findworkevent[] | undefined) {
        this._msdyn_msdyn_projectteam_msdyn_findworkevent_Work = value;
    };
    /**
     * Gets the msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers() {
        return this._msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers;
    };
    /**
     * Sets the msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers property value. 
     * @param value Value to set for the msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers property.
     */
    public set msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers(value: Msdyn_projecttask[] | undefined) {
        this._msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers = value;
    };
    /**
     * Gets the msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership property value. 
     * @returns a msdyn_projectteammembersignup
     */
    public get msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership() {
        return this._msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership;
    };
    /**
     * Sets the msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership property value. 
     * @param value Value to set for the msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership property.
     */
    public set msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership(value: Msdyn_projectteammembersignup[] | undefined) {
        this._msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership = value;
    };
    /**
     * Gets the msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid property value. 
     * @returns a msdyn_resourceassignment
     */
    public get msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid() {
        return this._msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid;
    };
    /**
     * Sets the msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid property value. 
     * @param value Value to set for the msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid property.
     */
    public set msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid(value: Msdyn_resourceassignment[] | undefined) {
        this._msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid = value;
    };
    /**
     * Gets the msdyn_msprojectclientid property value. 
     * @returns a string
     */
    public get msdyn_msprojectclientid() {
        return this._msdyn_msprojectclientid;
    };
    /**
     * Sets the msdyn_msprojectclientid property value. 
     * @param value Value to set for the msdyn_msprojectclientid property.
     */
    public set msdyn_msprojectclientid(value: string | undefined) {
        this._msdyn_msprojectclientid = value;
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
     * Gets the msdyn_number property value. 
     * @returns a integer
     */
    public get msdyn_number() {
        return this._msdyn_number;
    };
    /**
     * Sets the msdyn_number property value. 
     * @param value Value to set for the msdyn_number property.
     */
    public set msdyn_number(value: number | undefined) {
        this._msdyn_number = value;
    };
    /**
     * Gets the msdyn_organizationalunit property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_organizationalunit() {
        return this._msdyn_organizationalunit;
    };
    /**
     * Sets the msdyn_organizationalunit property value. 
     * @param value Value to set for the msdyn_organizationalunit property.
     */
    public set msdyn_organizationalunit(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_organizationalunit = value;
    };
    /**
     * Gets the msdyn_percentage property value. 
     * @returns a int64
     */
    public get msdyn_percentage() {
        return this._msdyn_percentage;
    };
    /**
     * Sets the msdyn_percentage property value. 
     * @param value Value to set for the msdyn_percentage property.
     */
    public set msdyn_percentage(value: number | undefined) {
        this._msdyn_percentage = value;
    };
    /**
     * Gets the msdyn_project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_project() {
        return this._msdyn_project;
    };
    /**
     * Sets the msdyn_project property value. 
     * @param value Value to set for the msdyn_project property.
     */
    public set msdyn_project(value: Msdyn_project | undefined) {
        this._msdyn_project = value;
    };
    /**
     * Gets the msdyn_projectapprover property value. 
     * @returns a boolean
     */
    public get msdyn_projectapprover() {
        return this._msdyn_projectapprover;
    };
    /**
     * Sets the msdyn_projectapprover property value. 
     * @param value Value to set for the msdyn_projectapprover property.
     */
    public set msdyn_projectapprover(value: boolean | undefined) {
        this._msdyn_projectapprover = value;
    };
    /**
     * Gets the msdyn_projectteam_ActivityPointers property value. 
     * @returns a activitypointer
     */
    public get msdyn_projectteam_ActivityPointers() {
        return this._msdyn_projectteam_ActivityPointers;
    };
    /**
     * Sets the msdyn_projectteam_ActivityPointers property value. 
     * @param value Value to set for the msdyn_projectteam_ActivityPointers property.
     */
    public set msdyn_projectteam_ActivityPointers(value: Activitypointer[] | undefined) {
        this._msdyn_projectteam_ActivityPointers = value;
    };
    /**
     * Gets the msdyn_projectteam_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_projectteam_Annotations() {
        return this._msdyn_projectteam_Annotations;
    };
    /**
     * Sets the msdyn_projectteam_Annotations property value. 
     * @param value Value to set for the msdyn_projectteam_Annotations property.
     */
    public set msdyn_projectteam_Annotations(value: Annotation[] | undefined) {
        this._msdyn_projectteam_Annotations = value;
    };
    /**
     * Gets the msdyn_projectteam_Appointments property value. 
     * @returns a appointment
     */
    public get msdyn_projectteam_Appointments() {
        return this._msdyn_projectteam_Appointments;
    };
    /**
     * Sets the msdyn_projectteam_Appointments property value. 
     * @param value Value to set for the msdyn_projectteam_Appointments property.
     */
    public set msdyn_projectteam_Appointments(value: Appointment[] | undefined) {
        this._msdyn_projectteam_Appointments = value;
    };
    /**
     * Gets the msdyn_projectteam_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_projectteam_AsyncOperations() {
        return this._msdyn_projectteam_AsyncOperations;
    };
    /**
     * Sets the msdyn_projectteam_AsyncOperations property value. 
     * @param value Value to set for the msdyn_projectteam_AsyncOperations property.
     */
    public set msdyn_projectteam_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_projectteam_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_projectteam_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_projectteam_BulkDeleteFailures() {
        return this._msdyn_projectteam_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_projectteam_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_projectteam_BulkDeleteFailures property.
     */
    public set msdyn_projectteam_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_projectteam_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_projectteam_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_projectteam_connections1() {
        return this._msdyn_projectteam_connections1;
    };
    /**
     * Sets the msdyn_projectteam_connections1 property value. 
     * @param value Value to set for the msdyn_projectteam_connections1 property.
     */
    public set msdyn_projectteam_connections1(value: Connection[] | undefined) {
        this._msdyn_projectteam_connections1 = value;
    };
    /**
     * Gets the msdyn_projectteam_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_projectteam_connections2() {
        return this._msdyn_projectteam_connections2;
    };
    /**
     * Sets the msdyn_projectteam_connections2 property value. 
     * @param value Value to set for the msdyn_projectteam_connections2 property.
     */
    public set msdyn_projectteam_connections2(value: Connection[] | undefined) {
        this._msdyn_projectteam_connections2 = value;
    };
    /**
     * Gets the msdyn_projectteam_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projectteam_DuplicateBaseRecord() {
        return this._msdyn_projectteam_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_projectteam_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_projectteam_DuplicateBaseRecord property.
     */
    public set msdyn_projectteam_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projectteam_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_projectteam_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projectteam_DuplicateMatchingRecord() {
        return this._msdyn_projectteam_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_projectteam_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_projectteam_DuplicateMatchingRecord property.
     */
    public set msdyn_projectteam_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projectteam_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_projectteam_Emails property value. 
     * @returns a email
     */
    public get msdyn_projectteam_Emails() {
        return this._msdyn_projectteam_Emails;
    };
    /**
     * Sets the msdyn_projectteam_Emails property value. 
     * @param value Value to set for the msdyn_projectteam_Emails property.
     */
    public set msdyn_projectteam_Emails(value: Email[] | undefined) {
        this._msdyn_projectteam_Emails = value;
    };
    /**
     * Gets the msdyn_projectteam_Faxes property value. 
     * @returns a fax
     */
    public get msdyn_projectteam_Faxes() {
        return this._msdyn_projectteam_Faxes;
    };
    /**
     * Sets the msdyn_projectteam_Faxes property value. 
     * @param value Value to set for the msdyn_projectteam_Faxes property.
     */
    public set msdyn_projectteam_Faxes(value: Fax[] | undefined) {
        this._msdyn_projectteam_Faxes = value;
    };
    /**
     * Gets the msdyn_projectteam_Letters property value. 
     * @returns a letter
     */
    public get msdyn_projectteam_Letters() {
        return this._msdyn_projectteam_Letters;
    };
    /**
     * Sets the msdyn_projectteam_Letters property value. 
     * @param value Value to set for the msdyn_projectteam_Letters property.
     */
    public set msdyn_projectteam_Letters(value: Letter[] | undefined) {
        this._msdyn_projectteam_Letters = value;
    };
    /**
     * Gets the msdyn_projectteam_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_projectteam_MailboxTrackingFolders() {
        return this._msdyn_projectteam_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_projectteam_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_projectteam_MailboxTrackingFolders property.
     */
    public set msdyn_projectteam_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_projectteam_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_projectteam_msdyn_approvals property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_projectteam_msdyn_approvals() {
        return this._msdyn_projectteam_msdyn_approvals;
    };
    /**
     * Sets the msdyn_projectteam_msdyn_approvals property value. 
     * @param value Value to set for the msdyn_projectteam_msdyn_approvals property.
     */
    public set msdyn_projectteam_msdyn_approvals(value: Msdyn_approval[] | undefined) {
        this._msdyn_projectteam_msdyn_approvals = value;
    };
    /**
     * Gets the msdyn_projectteam_msdyn_bookingalerts property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_projectteam_msdyn_bookingalerts() {
        return this._msdyn_projectteam_msdyn_bookingalerts;
    };
    /**
     * Sets the msdyn_projectteam_msdyn_bookingalerts property value. 
     * @param value Value to set for the msdyn_projectteam_msdyn_bookingalerts property.
     */
    public set msdyn_projectteam_msdyn_bookingalerts(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_projectteam_msdyn_bookingalerts = value;
    };
    /**
     * Gets the msdyn_projectteam_msdyn_ocliveworkitems property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_projectteam_msdyn_ocliveworkitems() {
        return this._msdyn_projectteam_msdyn_ocliveworkitems;
    };
    /**
     * Sets the msdyn_projectteam_msdyn_ocliveworkitems property value. 
     * @param value Value to set for the msdyn_projectteam_msdyn_ocliveworkitems property.
     */
    public set msdyn_projectteam_msdyn_ocliveworkitems(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_projectteam_msdyn_ocliveworkitems = value;
    };
    /**
     * Gets the msdyn_projectteam_msdyn_ocoutboundmessages property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_projectteam_msdyn_ocoutboundmessages() {
        return this._msdyn_projectteam_msdyn_ocoutboundmessages;
    };
    /**
     * Sets the msdyn_projectteam_msdyn_ocoutboundmessages property value. 
     * @param value Value to set for the msdyn_projectteam_msdyn_ocoutboundmessages property.
     */
    public set msdyn_projectteam_msdyn_ocoutboundmessages(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_projectteam_msdyn_ocoutboundmessages = value;
    };
    /**
     * Gets the msdyn_projectteam_msdyn_ocsessions property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_projectteam_msdyn_ocsessions() {
        return this._msdyn_projectteam_msdyn_ocsessions;
    };
    /**
     * Sets the msdyn_projectteam_msdyn_ocsessions property value. 
     * @param value Value to set for the msdyn_projectteam_msdyn_ocsessions property.
     */
    public set msdyn_projectteam_msdyn_ocsessions(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_projectteam_msdyn_ocsessions = value;
    };
    /**
     * Gets the msdyn_projectteam_msfp_alerts property value. 
     * @returns a msfp_alert
     */
    public get msdyn_projectteam_msfp_alerts() {
        return this._msdyn_projectteam_msfp_alerts;
    };
    /**
     * Sets the msdyn_projectteam_msfp_alerts property value. 
     * @param value Value to set for the msdyn_projectteam_msfp_alerts property.
     */
    public set msdyn_projectteam_msfp_alerts(value: Msfp_alert[] | undefined) {
        this._msdyn_projectteam_msfp_alerts = value;
    };
    /**
     * Gets the msdyn_projectteam_msfp_surveyinvites property value. 
     * @returns a msfp_surveyinvite
     */
    public get msdyn_projectteam_msfp_surveyinvites() {
        return this._msdyn_projectteam_msfp_surveyinvites;
    };
    /**
     * Sets the msdyn_projectteam_msfp_surveyinvites property value. 
     * @param value Value to set for the msdyn_projectteam_msfp_surveyinvites property.
     */
    public set msdyn_projectteam_msfp_surveyinvites(value: Msfp_surveyinvite[] | undefined) {
        this._msdyn_projectteam_msfp_surveyinvites = value;
    };
    /**
     * Gets the msdyn_projectteam_msfp_surveyresponses property value. 
     * @returns a msfp_surveyresponse
     */
    public get msdyn_projectteam_msfp_surveyresponses() {
        return this._msdyn_projectteam_msfp_surveyresponses;
    };
    /**
     * Sets the msdyn_projectteam_msfp_surveyresponses property value. 
     * @param value Value to set for the msdyn_projectteam_msfp_surveyresponses property.
     */
    public set msdyn_projectteam_msfp_surveyresponses(value: Msfp_surveyresponse[] | undefined) {
        this._msdyn_projectteam_msfp_surveyresponses = value;
    };
    /**
     * Gets the msdyn_projectteam_PhoneCalls property value. 
     * @returns a phonecall
     */
    public get msdyn_projectteam_PhoneCalls() {
        return this._msdyn_projectteam_PhoneCalls;
    };
    /**
     * Sets the msdyn_projectteam_PhoneCalls property value. 
     * @param value Value to set for the msdyn_projectteam_PhoneCalls property.
     */
    public set msdyn_projectteam_PhoneCalls(value: Phonecall[] | undefined) {
        this._msdyn_projectteam_PhoneCalls = value;
    };
    /**
     * Gets the msdyn_projectteam_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_projectteam_PrincipalObjectAttributeAccesses() {
        return this._msdyn_projectteam_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_projectteam_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_projectteam_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_projectteam_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_projectteam_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_projectteam_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_projectteam_ProcessSession() {
        return this._msdyn_projectteam_ProcessSession;
    };
    /**
     * Sets the msdyn_projectteam_ProcessSession property value. 
     * @param value Value to set for the msdyn_projectteam_ProcessSession property.
     */
    public set msdyn_projectteam_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_projectteam_ProcessSession = value;
    };
    /**
     * Gets the msdyn_projectteam_RecurringAppointmentMasters property value. 
     * @returns a recurringappointmentmaster
     */
    public get msdyn_projectteam_RecurringAppointmentMasters() {
        return this._msdyn_projectteam_RecurringAppointmentMasters;
    };
    /**
     * Sets the msdyn_projectteam_RecurringAppointmentMasters property value. 
     * @param value Value to set for the msdyn_projectteam_RecurringAppointmentMasters property.
     */
    public set msdyn_projectteam_RecurringAppointmentMasters(value: Recurringappointmentmaster[] | undefined) {
        this._msdyn_projectteam_RecurringAppointmentMasters = value;
    };
    /**
     * Gets the msdyn_projectteam_ServiceAppointments property value. 
     * @returns a serviceappointment
     */
    public get msdyn_projectteam_ServiceAppointments() {
        return this._msdyn_projectteam_ServiceAppointments;
    };
    /**
     * Sets the msdyn_projectteam_ServiceAppointments property value. 
     * @param value Value to set for the msdyn_projectteam_ServiceAppointments property.
     */
    public set msdyn_projectteam_ServiceAppointments(value: Serviceappointment[] | undefined) {
        this._msdyn_projectteam_ServiceAppointments = value;
    };
    /**
     * Gets the msdyn_projectteam_SocialActivities property value. 
     * @returns a socialactivity
     */
    public get msdyn_projectteam_SocialActivities() {
        return this._msdyn_projectteam_SocialActivities;
    };
    /**
     * Sets the msdyn_projectteam_SocialActivities property value. 
     * @param value Value to set for the msdyn_projectteam_SocialActivities property.
     */
    public set msdyn_projectteam_SocialActivities(value: Socialactivity[] | undefined) {
        this._msdyn_projectteam_SocialActivities = value;
    };
    /**
     * Gets the msdyn_projectteam_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_projectteam_SyncErrors() {
        return this._msdyn_projectteam_SyncErrors;
    };
    /**
     * Sets the msdyn_projectteam_SyncErrors property value. 
     * @param value Value to set for the msdyn_projectteam_SyncErrors property.
     */
    public set msdyn_projectteam_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_projectteam_SyncErrors = value;
    };
    /**
     * Gets the msdyn_projectteam_Tasks property value. 
     * @returns a task
     */
    public get msdyn_projectteam_Tasks() {
        return this._msdyn_projectteam_Tasks;
    };
    /**
     * Sets the msdyn_projectteam_Tasks property value. 
     * @param value Value to set for the msdyn_projectteam_Tasks property.
     */
    public set msdyn_projectteam_Tasks(value: Task[] | undefined) {
        this._msdyn_projectteam_Tasks = value;
    };
    /**
     * Gets the msdyn_projectteamid property value. 
     * @returns a string
     */
    public get msdyn_projectteamid() {
        return this._msdyn_projectteamid;
    };
    /**
     * Sets the msdyn_projectteamid property value. 
     * @param value Value to set for the msdyn_projectteamid property.
     */
    public set msdyn_projectteamid(value: string | undefined) {
        this._msdyn_projectteamid = value;
    };
    /**
     * Gets the msdyn_requiredhours property value. 
     * @returns a int64
     */
    public get msdyn_requiredhours() {
        return this._msdyn_requiredhours;
    };
    /**
     * Sets the msdyn_requiredhours property value. 
     * @param value Value to set for the msdyn_requiredhours property.
     */
    public set msdyn_requiredhours(value: number | undefined) {
        this._msdyn_requiredhours = value;
    };
    /**
     * Gets the msdyn_resourcecategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_resourcecategory() {
        return this._msdyn_resourcecategory;
    };
    /**
     * Sets the msdyn_resourcecategory property value. 
     * @param value Value to set for the msdyn_resourcecategory property.
     */
    public set msdyn_resourcecategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_resourcecategory = value;
    };
    /**
     * Gets the msdyn_resourcerequirementid property value. 
     * @returns a msdyn_resourcerequirement
     */
    public get msdyn_resourcerequirementid() {
        return this._msdyn_resourcerequirementid;
    };
    /**
     * Sets the msdyn_resourcerequirementid property value. 
     * @param value Value to set for the msdyn_resourcerequirementid property.
     */
    public set msdyn_resourcerequirementid(value: Msdyn_resourcerequirement | undefined) {
        this._msdyn_resourcerequirementid = value;
    };
    /**
     * Gets the msdyn_roledescription property value. 
     * @returns a string
     */
    public get msdyn_roledescription() {
        return this._msdyn_roledescription;
    };
    /**
     * Sets the msdyn_roledescription property value. 
     * @param value Value to set for the msdyn_roledescription property.
     */
    public set msdyn_roledescription(value: string | undefined) {
        this._msdyn_roledescription = value;
    };
    /**
     * Gets the msdyn_softbookedhours property value. 
     * @returns a int64
     */
    public get msdyn_softbookedhours() {
        return this._msdyn_softbookedhours;
    };
    /**
     * Sets the msdyn_softbookedhours property value. 
     * @param value Value to set for the msdyn_softbookedhours property.
     */
    public set msdyn_softbookedhours(value: number | undefined) {
        this._msdyn_softbookedhours = value;
    };
    /**
     * Gets the msdyn_to property value. 
     * @returns a Date
     */
    public get msdyn_to() {
        return this._msdyn_to;
    };
    /**
     * Sets the msdyn_to property value. 
     * @param value Value to set for the msdyn_to property.
     */
    public set msdyn_to(value: Date | undefined) {
        this._msdyn_to = value;
    };
    /**
     * Gets the msdyn_worktemplate property value. 
     * @returns a msdyn_workhourtemplate
     */
    public get msdyn_worktemplate() {
        return this._msdyn_worktemplate;
    };
    /**
     * Sets the msdyn_worktemplate property value. 
     * @param value Value to set for the msdyn_worktemplate property.
     */
    public set msdyn_worktemplate(value: Msdyn_workhourtemplate | undefined) {
        this._msdyn_worktemplate = value;
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
        writer.writeStringValue("_msdyn_bookableresourceid_value", this._msdyn_bookableresourceid_value);
        writer.writeStringValue("_msdyn_organizationalunit_value", this._msdyn_organizationalunit_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_resourcerequirementid_value", this._msdyn_resourcerequirementid_value);
        writer.writeStringValue("_msdyn_worktemplate_value", this._msdyn_worktemplate_value);
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
        writer.writeNumberValue("msdyn_allocationmethod", this.msdyn_allocationmethod);
        writer.writeNumberValue("msdyn_applicantcount", this.msdyn_applicantcount);
        writer.writeDateValue("msdyn_applicantcount_date", this.msdyn_applicantcount_date);
        writer.writeNumberValue("msdyn_applicantcount_state", this.msdyn_applicantcount_state);
        writer.writeBooleanValue("msdyn_applicantsavailable", this.msdyn_applicantsavailable);
        writer.writeNumberValue("msdyn_assignedhours", this.msdyn_assignedhours);
        writer.writeNumberValue("msdyn_billingtype", this.msdyn_billingtype);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresourceid", this.msdyn_bookableresourceid);
        writer.writeStringValue("msdyn_calendarid", this.msdyn_calendarid);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeDateValue("msdyn_from", this.msdyn_from);
        writer.writeNumberValue("msdyn_hardbookedhours", this.msdyn_hardbookedhours);
        writer.writeNumberValue("msdyn_hours", this.msdyn_hours);
        writer.writeNumberValue("msdyn_hoursrequested", this.msdyn_hoursrequested);
        writer.writeNumberValue("msdyn_membershipstatus", this.msdyn_membershipstatus);
        writer.writeCollectionOfObjectValues<Bookableresourcebooking>("msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid", this.msdyn_msdyn_projectteam_bookableresourcebooking_projectteamid);
        writer.writeCollectionOfObjectValues<Bookableresourcebookingheader>("msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid", this.msdyn_msdyn_projectteam_bookableresourcebookingheader_projectteamid);
        writer.writeCollectionOfObjectValues<Msdyn_findworkevent>("msdyn_msdyn_projectteam_msdyn_findworkevent_Work", this.msdyn_msdyn_projectteam_msdyn_findworkevent_Work);
        writer.writeCollectionOfObjectValues<Msdyn_projecttask>("msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers", this.msdyn_msdyn_projectteam_msdyn_projecttask_AssignedTeamMembers);
        writer.writeCollectionOfObjectValues<Msdyn_projectteammembersignup>("msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership", this.msdyn_msdyn_projectteam_msdyn_projectteammembersignup_TeamMembership);
        writer.writeCollectionOfObjectValues<Msdyn_resourceassignment>("msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid", this.msdyn_msdyn_projectteam_msdyn_resourceassignment_projectteamid);
        writer.writeStringValue("msdyn_msprojectclientid", this.msdyn_msprojectclientid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_number", this.msdyn_number);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_organizationalunit", this.msdyn_organizationalunit);
        writer.writeNumberValue("msdyn_percentage", this.msdyn_percentage);
        writer.writeObjectValue<Msdyn_project>("msdyn_project", this.msdyn_project);
        writer.writeBooleanValue("msdyn_projectapprover", this.msdyn_projectapprover);
        writer.writeCollectionOfObjectValues<Activitypointer>("msdyn_projectteam_ActivityPointers", this.msdyn_projectteam_ActivityPointers);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_projectteam_Annotations", this.msdyn_projectteam_Annotations);
        writer.writeCollectionOfObjectValues<Appointment>("msdyn_projectteam_Appointments", this.msdyn_projectteam_Appointments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_projectteam_AsyncOperations", this.msdyn_projectteam_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_projectteam_BulkDeleteFailures", this.msdyn_projectteam_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_projectteam_connections1", this.msdyn_projectteam_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_projectteam_connections2", this.msdyn_projectteam_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projectteam_DuplicateBaseRecord", this.msdyn_projectteam_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projectteam_DuplicateMatchingRecord", this.msdyn_projectteam_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("msdyn_projectteam_Emails", this.msdyn_projectteam_Emails);
        writer.writeCollectionOfObjectValues<Fax>("msdyn_projectteam_Faxes", this.msdyn_projectteam_Faxes);
        writer.writeCollectionOfObjectValues<Letter>("msdyn_projectteam_Letters", this.msdyn_projectteam_Letters);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_projectteam_MailboxTrackingFolders", this.msdyn_projectteam_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_projectteam_msdyn_approvals", this.msdyn_projectteam_msdyn_approvals);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_projectteam_msdyn_bookingalerts", this.msdyn_projectteam_msdyn_bookingalerts);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_projectteam_msdyn_ocliveworkitems", this.msdyn_projectteam_msdyn_ocliveworkitems);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_projectteam_msdyn_ocoutboundmessages", this.msdyn_projectteam_msdyn_ocoutboundmessages);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_projectteam_msdyn_ocsessions", this.msdyn_projectteam_msdyn_ocsessions);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msdyn_projectteam_msfp_alerts", this.msdyn_projectteam_msfp_alerts);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msdyn_projectteam_msfp_surveyinvites", this.msdyn_projectteam_msfp_surveyinvites);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msdyn_projectteam_msfp_surveyresponses", this.msdyn_projectteam_msfp_surveyresponses);
        writer.writeCollectionOfObjectValues<Phonecall>("msdyn_projectteam_PhoneCalls", this.msdyn_projectteam_PhoneCalls);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_projectteam_PrincipalObjectAttributeAccesses", this.msdyn_projectteam_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_projectteam_ProcessSession", this.msdyn_projectteam_ProcessSession);
        writer.writeCollectionOfObjectValues<Recurringappointmentmaster>("msdyn_projectteam_RecurringAppointmentMasters", this.msdyn_projectteam_RecurringAppointmentMasters);
        writer.writeCollectionOfObjectValues<Serviceappointment>("msdyn_projectteam_ServiceAppointments", this.msdyn_projectteam_ServiceAppointments);
        writer.writeCollectionOfObjectValues<Socialactivity>("msdyn_projectteam_SocialActivities", this.msdyn_projectteam_SocialActivities);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_projectteam_SyncErrors", this.msdyn_projectteam_SyncErrors);
        writer.writeCollectionOfObjectValues<Task>("msdyn_projectteam_Tasks", this.msdyn_projectteam_Tasks);
        writer.writeStringValue("msdyn_projectteamid", this.msdyn_projectteamid);
        writer.writeNumberValue("msdyn_requiredhours", this.msdyn_requiredhours);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_resourcecategory", this.msdyn_resourcecategory);
        writer.writeObjectValue<Msdyn_resourcerequirement>("msdyn_resourcerequirementid", this.msdyn_resourcerequirementid);
        writer.writeStringValue("msdyn_roledescription", this.msdyn_roledescription);
        writer.writeNumberValue("msdyn_softbookedhours", this.msdyn_softbookedhours);
        writer.writeDateValue("msdyn_to", this.msdyn_to);
        writer.writeObjectValue<Msdyn_workhourtemplate>("msdyn_worktemplate", this.msdyn_worktemplate);
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
