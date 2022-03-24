import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createEmailserverprofileFromDiscriminatorValue} from './createEmailserverprofileFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createIncidentresolutionFromDiscriminatorValue} from './createIncidentresolutionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalFromDiscriminatorValue} from './createMsdyn_approvalFromDiscriminatorValue';
import {createMsdyn_bookingalertFromDiscriminatorValue} from './createMsdyn_bookingalertFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocoutboundmessageFromDiscriminatorValue} from './createMsdyn_ocoutboundmessageFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsfp_alertFromDiscriminatorValue} from './createMsfp_alertFromDiscriminatorValue';
import {createMsfp_surveyinviteFromDiscriminatorValue} from './createMsfp_surveyinviteFromDiscriminatorValue';
import {createMsfp_surveyresponseFromDiscriminatorValue} from './createMsfp_surveyresponseFromDiscriminatorValue';
import {createOpportunitycloseFromDiscriminatorValue} from './createOpportunitycloseFromDiscriminatorValue';
import {createOrdercloseFromDiscriminatorValue} from './createOrdercloseFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createQuotecloseFromDiscriminatorValue} from './createQuotecloseFromDiscriminatorValue';
import {createServiceappointmentFromDiscriminatorValue} from './createServiceappointmentFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTracelogFromDiscriminatorValue} from './createTracelogFromDiscriminatorValue';
import {Activitypointer, Annotation, Asyncoperation, Bulkoperation, Businessunit, Campaignactivity, Campaignresponse, Crmbaseentity, Email, Emailserverprofile, Fileattachment, Incidentresolution, Mailboxtrackingfolder, Msdyn_approval, Msdyn_bookingalert, Msdyn_ocliveworkitem, Msdyn_ocoutboundmessage, Msdyn_ocsession, Msfp_alert, Msfp_surveyinvite, Msfp_surveyresponse, Opportunityclose, Orderclose, Organization, Principal, Processsession, Queue, Quoteclose, Serviceappointment, Syncerror, Systemuser, Team, Tracelog} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Mailbox extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __emailserverprofile_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private _actdeliverymethod?: number | undefined;
    private _activitypointer_sendermailboxid_mailbox?: Activitypointer[] | undefined;
    private _actstatus?: number | undefined;
    private _allowemailconnectortousecredentials?: boolean | undefined;
    private _averagetotalduration?: number | undefined;
    private _bulkoperation_mailbox_sendermailboxid?: Bulkoperation[] | undefined;
    private _campaignactivity_mailbox_sendermailboxid?: Campaignactivity[] | undefined;
    private _campaignresponse_mailbox_sendermailboxid?: Campaignresponse[] | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _email_sendermailboxid_mailbox?: Email[] | undefined;
    private _emailaddress?: string | undefined;
    private _emailrouteraccessapproval?: number | undefined;
    private _emailserverprofile?: Emailserverprofile | undefined;
    private _enabledforact?: boolean | undefined;
    private _enabledforincomingemail?: boolean | undefined;
    private _enabledforoutgoingemail?: boolean | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _ewsurl?: string | undefined;
    private _exchangecontactsimportcompletedon?: Date | undefined;
    private _exchangecontactsimportstatus?: number | undefined;
    private _exchangesyncstatexml?: string | undefined;
    private _exchangesyncstatexmlfileref?: string | undefined;
    private _exchangesyncstatexmlfileref_name?: string | undefined;
    private _folderhierarchy?: string | undefined;
    private _forcedunlockcount?: number | undefined;
    private _hostid?: string | undefined;
    private _incidentresolution_mailbox_sendermailboxid?: Incidentresolution[] | undefined;
    private _incomingemaildeliverymethod?: number | undefined;
    private _incomingemailstatus?: number | undefined;
    private _isactsyncorgflagset?: boolean | undefined;
    private _isemailaddressapprovedbyo365admin?: boolean | undefined;
    private _isexchangecontactsimportscheduled?: boolean | undefined;
    private _isforwardmailbox?: boolean | undefined;
    private _isoauthaccesstokenset?: boolean | undefined;
    private _isoauthrefreshtokenset?: boolean | undefined;
    private _ispasswordset?: boolean | undefined;
    private _isserviceaccount?: boolean | undefined;
    private _itemsfailedforlastsync?: number | undefined;
    private _itemsprocessedforlastsync?: number | undefined;
    private _lastautodiscoveredon?: Date | undefined;
    private _lastduration?: number | undefined;
    private _lastmailboxforcedunlockoccurredon?: Date | undefined;
    private _lastsuccessfulsynccompletedon?: Date | undefined;
    private _lastsyncerror?: string | undefined;
    private _lastsyncerrorcode?: number | undefined;
    private _lastsyncerrorcount?: number | undefined;
    private _lastsyncerrormachinename?: string | undefined;
    private _lastsyncerroroccurredon?: Date | undefined;
    private _lastsyncstartedon?: Date | undefined;
    private _lasttaggedmessageid?: string | undefined;
    private _mailbox_Annotation?: Annotation[] | undefined;
    private _mailbox_asyncoperations?: Asyncoperation[] | undefined;
    private _mailbox_email_ReceivingMailboxId?: Email[] | undefined;
    private _mailbox_FileAttachments?: Fileattachment[] | undefined;
    private _mailbox_MailboxTrackingFolder?: Mailboxtrackingfolder[] | undefined;
    private _mailbox_processsessions?: Processsession[] | undefined;
    private _mailbox_SyncErrors?: Syncerror[] | undefined;
    private _mailboxid?: string | undefined;
    private _mailboxprocessingcontext?: number | undefined;
    private _mailboxstatus?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_approval_mailbox_sendermailboxid?: Msdyn_approval[] | undefined;
    private _msdyn_bookingalert_mailbox_sendermailboxid?: Msdyn_bookingalert[] | undefined;
    private _msdyn_ocliveworkitem_mailbox_sendermailboxid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_ocoutboundmessage_mailbox_sendermailboxid?: Msdyn_ocoutboundmessage[] | undefined;
    private _msdyn_ocsession_mailbox_sendermailboxid?: Msdyn_ocsession[] | undefined;
    private _msfp_alert_mailbox_sendermailboxid?: Msfp_alert[] | undefined;
    private _msfp_surveyinvite_mailbox_sendermailboxid?: Msfp_surveyinvite[] | undefined;
    private _msfp_surveyresponse_mailbox_sendermailboxid?: Msfp_surveyresponse[] | undefined;
    private _name?: string | undefined;
    private _nextscheduledactsyncinseconds?: number | undefined;
    private _noactcount?: number | undefined;
    private _noemailcount?: number | undefined;
    private _oauthaccesstoken?: string | undefined;
    private _oauthrefreshtoken?: string | undefined;
    private _oauthtokenexpireson?: Date | undefined;
    private _officeappsdeploymentcompleteon?: Date | undefined;
    private _officeappsdeploymenterror?: string | undefined;
    private _officeappsdeploymentscheduled?: boolean | undefined;
    private _officeappsdeploymentstatus?: number | undefined;
    private _opportunityclose_mailbox_sendermailboxid?: Opportunityclose[] | undefined;
    private _orderclose_mailbox_sendermailboxid?: Orderclose[] | undefined;
    private _organizationid?: Organization | undefined;
    private _orgmarkedasprimaryforexchangesync?: boolean | undefined;
    private _outgoingemaildeliverymethod?: number | undefined;
    private _outgoingemailstatus?: number | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _password?: string | undefined;
    private _postponemailboxprocessinguntil?: Date | undefined;
    private _postponeofficeappsdeploymentuntil?: Date | undefined;
    private _postponesendinguntil?: Date | undefined;
    private _postponetestemailconfigurationuntil?: Date | undefined;
    private _processanddeleteemails?: boolean | undefined;
    private _processedtimes?: number | undefined;
    private _processemailreceivedafter?: Date | undefined;
    private _processinglastattemptedon?: Date | undefined;
    private _processingstatecode?: number | undefined;
    private _queue_defaultmailbox_mailbox?: Queue[] | undefined;
    private _quoteclose_mailbox_sendermailboxid?: Quoteclose[] | undefined;
    private _receivingpostponeduntil?: Date | undefined;
    private _receivingpostponeduntilforact?: Date | undefined;
    private _regardingobjectid?: Systemuser | undefined;
    private _regardingobjectid_queue?: Queue | undefined;
    private _serviceappointment_mailbox_sendermailboxid?: Serviceappointment[] | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _systemuser_defaultmailbox_mailbox?: Systemuser[] | undefined;
    private _tagemailsafter?: Date | undefined;
    private _testemailconfigurationretrycount?: number | undefined;
    private _testemailconfigurationscheduled?: boolean | undefined;
    private _testmailboxaccesscompletedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _tracelog_Mailbox?: Tracelog[] | undefined;
    private _transientfailurecount?: number | undefined;
    private _undeliverablefolder?: string | undefined;
    private _username?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _verboseloggingenabled?: number | undefined;
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
     * Gets the _emailserverprofile_value property value. 
     * @returns a string
     */
    public get _emailserverprofile_value() {
        return this.__emailserverprofile_value;
    };
    /**
     * Sets the _emailserverprofile_value property value. 
     * @param value Value to set for the _emailserverprofile_value property.
     */
    public set _emailserverprofile_value(value: string | undefined) {
        this.__emailserverprofile_value = value;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
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
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the actdeliverymethod property value. 
     * @returns a integer
     */
    public get actdeliverymethod() {
        return this._actdeliverymethod;
    };
    /**
     * Sets the actdeliverymethod property value. 
     * @param value Value to set for the actdeliverymethod property.
     */
    public set actdeliverymethod(value: number | undefined) {
        this._actdeliverymethod = value;
    };
    /**
     * Gets the activitypointer_sendermailboxid_mailbox property value. 
     * @returns a activitypointer
     */
    public get activitypointer_sendermailboxid_mailbox() {
        return this._activitypointer_sendermailboxid_mailbox;
    };
    /**
     * Sets the activitypointer_sendermailboxid_mailbox property value. 
     * @param value Value to set for the activitypointer_sendermailboxid_mailbox property.
     */
    public set activitypointer_sendermailboxid_mailbox(value: Activitypointer[] | undefined) {
        this._activitypointer_sendermailboxid_mailbox = value;
    };
    /**
     * Gets the actstatus property value. 
     * @returns a integer
     */
    public get actstatus() {
        return this._actstatus;
    };
    /**
     * Sets the actstatus property value. 
     * @param value Value to set for the actstatus property.
     */
    public set actstatus(value: number | undefined) {
        this._actstatus = value;
    };
    /**
     * Gets the allowemailconnectortousecredentials property value. 
     * @returns a boolean
     */
    public get allowemailconnectortousecredentials() {
        return this._allowemailconnectortousecredentials;
    };
    /**
     * Sets the allowemailconnectortousecredentials property value. 
     * @param value Value to set for the allowemailconnectortousecredentials property.
     */
    public set allowemailconnectortousecredentials(value: boolean | undefined) {
        this._allowemailconnectortousecredentials = value;
    };
    /**
     * Gets the averagetotalduration property value. 
     * @returns a integer
     */
    public get averagetotalduration() {
        return this._averagetotalduration;
    };
    /**
     * Sets the averagetotalduration property value. 
     * @param value Value to set for the averagetotalduration property.
     */
    public set averagetotalduration(value: number | undefined) {
        this._averagetotalduration = value;
    };
    /**
     * Gets the bulkoperation_mailbox_sendermailboxid property value. 
     * @returns a bulkoperation
     */
    public get bulkoperation_mailbox_sendermailboxid() {
        return this._bulkoperation_mailbox_sendermailboxid;
    };
    /**
     * Sets the bulkoperation_mailbox_sendermailboxid property value. 
     * @param value Value to set for the bulkoperation_mailbox_sendermailboxid property.
     */
    public set bulkoperation_mailbox_sendermailboxid(value: Bulkoperation[] | undefined) {
        this._bulkoperation_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the campaignactivity_mailbox_sendermailboxid property value. 
     * @returns a campaignactivity
     */
    public get campaignactivity_mailbox_sendermailboxid() {
        return this._campaignactivity_mailbox_sendermailboxid;
    };
    /**
     * Sets the campaignactivity_mailbox_sendermailboxid property value. 
     * @param value Value to set for the campaignactivity_mailbox_sendermailboxid property.
     */
    public set campaignactivity_mailbox_sendermailboxid(value: Campaignactivity[] | undefined) {
        this._campaignactivity_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the campaignresponse_mailbox_sendermailboxid property value. 
     * @returns a campaignresponse
     */
    public get campaignresponse_mailbox_sendermailboxid() {
        return this._campaignresponse_mailbox_sendermailboxid;
    };
    /**
     * Sets the campaignresponse_mailbox_sendermailboxid property value. 
     * @param value Value to set for the campaignresponse_mailbox_sendermailboxid property.
     */
    public set campaignresponse_mailbox_sendermailboxid(value: Campaignresponse[] | undefined) {
        this._campaignresponse_mailbox_sendermailboxid = value;
    };
    /**
     * Instantiates a new mailbox and sets the default values.
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
     * Gets the email_sendermailboxid_mailbox property value. 
     * @returns a email
     */
    public get email_sendermailboxid_mailbox() {
        return this._email_sendermailboxid_mailbox;
    };
    /**
     * Sets the email_sendermailboxid_mailbox property value. 
     * @param value Value to set for the email_sendermailboxid_mailbox property.
     */
    public set email_sendermailboxid_mailbox(value: Email[] | undefined) {
        this._email_sendermailboxid_mailbox = value;
    };
    /**
     * Gets the emailaddress property value. 
     * @returns a string
     */
    public get emailaddress() {
        return this._emailaddress;
    };
    /**
     * Sets the emailaddress property value. 
     * @param value Value to set for the emailaddress property.
     */
    public set emailaddress(value: string | undefined) {
        this._emailaddress = value;
    };
    /**
     * Gets the emailrouteraccessapproval property value. 
     * @returns a integer
     */
    public get emailrouteraccessapproval() {
        return this._emailrouteraccessapproval;
    };
    /**
     * Sets the emailrouteraccessapproval property value. 
     * @param value Value to set for the emailrouteraccessapproval property.
     */
    public set emailrouteraccessapproval(value: number | undefined) {
        this._emailrouteraccessapproval = value;
    };
    /**
     * Gets the emailserverprofile property value. 
     * @returns a emailserverprofile
     */
    public get emailserverprofile() {
        return this._emailserverprofile;
    };
    /**
     * Sets the emailserverprofile property value. 
     * @param value Value to set for the emailserverprofile property.
     */
    public set emailserverprofile(value: Emailserverprofile | undefined) {
        this._emailserverprofile = value;
    };
    /**
     * Gets the enabledforact property value. 
     * @returns a boolean
     */
    public get enabledforact() {
        return this._enabledforact;
    };
    /**
     * Sets the enabledforact property value. 
     * @param value Value to set for the enabledforact property.
     */
    public set enabledforact(value: boolean | undefined) {
        this._enabledforact = value;
    };
    /**
     * Gets the enabledforincomingemail property value. 
     * @returns a boolean
     */
    public get enabledforincomingemail() {
        return this._enabledforincomingemail;
    };
    /**
     * Sets the enabledforincomingemail property value. 
     * @param value Value to set for the enabledforincomingemail property.
     */
    public set enabledforincomingemail(value: boolean | undefined) {
        this._enabledforincomingemail = value;
    };
    /**
     * Gets the enabledforoutgoingemail property value. 
     * @returns a boolean
     */
    public get enabledforoutgoingemail() {
        return this._enabledforoutgoingemail;
    };
    /**
     * Sets the enabledforoutgoingemail property value. 
     * @param value Value to set for the enabledforoutgoingemail property.
     */
    public set enabledforoutgoingemail(value: boolean | undefined) {
        this._enabledforoutgoingemail = value;
    };
    /**
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * Gets the ewsurl property value. 
     * @returns a string
     */
    public get ewsurl() {
        return this._ewsurl;
    };
    /**
     * Sets the ewsurl property value. 
     * @param value Value to set for the ewsurl property.
     */
    public set ewsurl(value: string | undefined) {
        this._ewsurl = value;
    };
    /**
     * Gets the exchangecontactsimportcompletedon property value. 
     * @returns a Date
     */
    public get exchangecontactsimportcompletedon() {
        return this._exchangecontactsimportcompletedon;
    };
    /**
     * Sets the exchangecontactsimportcompletedon property value. 
     * @param value Value to set for the exchangecontactsimportcompletedon property.
     */
    public set exchangecontactsimportcompletedon(value: Date | undefined) {
        this._exchangecontactsimportcompletedon = value;
    };
    /**
     * Gets the exchangecontactsimportstatus property value. 
     * @returns a integer
     */
    public get exchangecontactsimportstatus() {
        return this._exchangecontactsimportstatus;
    };
    /**
     * Sets the exchangecontactsimportstatus property value. 
     * @param value Value to set for the exchangecontactsimportstatus property.
     */
    public set exchangecontactsimportstatus(value: number | undefined) {
        this._exchangecontactsimportstatus = value;
    };
    /**
     * Gets the exchangesyncstatexml property value. 
     * @returns a string
     */
    public get exchangesyncstatexml() {
        return this._exchangesyncstatexml;
    };
    /**
     * Sets the exchangesyncstatexml property value. 
     * @param value Value to set for the exchangesyncstatexml property.
     */
    public set exchangesyncstatexml(value: string | undefined) {
        this._exchangesyncstatexml = value;
    };
    /**
     * Gets the exchangesyncstatexmlfileref property value. 
     * @returns a binary
     */
    public get exchangesyncstatexmlfileref() {
        return this._exchangesyncstatexmlfileref;
    };
    /**
     * Sets the exchangesyncstatexmlfileref property value. 
     * @param value Value to set for the exchangesyncstatexmlfileref property.
     */
    public set exchangesyncstatexmlfileref(value: string | undefined) {
        this._exchangesyncstatexmlfileref = value;
    };
    /**
     * Gets the exchangesyncstatexmlfileref_name property value. 
     * @returns a string
     */
    public get exchangesyncstatexmlfileref_name() {
        return this._exchangesyncstatexmlfileref_name;
    };
    /**
     * Sets the exchangesyncstatexmlfileref_name property value. 
     * @param value Value to set for the exchangesyncstatexmlfileref_name property.
     */
    public set exchangesyncstatexmlfileref_name(value: string | undefined) {
        this._exchangesyncstatexmlfileref_name = value;
    };
    /**
     * Gets the folderhierarchy property value. 
     * @returns a string
     */
    public get folderhierarchy() {
        return this._folderhierarchy;
    };
    /**
     * Sets the folderhierarchy property value. 
     * @param value Value to set for the folderhierarchy property.
     */
    public set folderhierarchy(value: string | undefined) {
        this._folderhierarchy = value;
    };
    /**
     * Gets the forcedunlockcount property value. 
     * @returns a integer
     */
    public get forcedunlockcount() {
        return this._forcedunlockcount;
    };
    /**
     * Sets the forcedunlockcount property value. 
     * @param value Value to set for the forcedunlockcount property.
     */
    public set forcedunlockcount(value: number | undefined) {
        this._forcedunlockcount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Mailbox)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Mailbox)._createdonbehalfby_value = n.getStringValue(); },
            "_emailserverprofile_value": (o, n) => { (o as unknown as Mailbox)._emailserverprofile_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Mailbox)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Mailbox)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Mailbox)._organizationid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Mailbox)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Mailbox)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Mailbox)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Mailbox)._owninguser_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Mailbox)._regardingobjectid_value = n.getStringValue(); },
            "actdeliverymethod": (o, n) => { (o as unknown as Mailbox).actdeliverymethod = n.getNumberValue(); },
            "activitypointer_sendermailboxid_mailbox": (o, n) => { (o as unknown as Mailbox).activitypointer_sendermailboxid_mailbox = n.getCollectionOfObjectValues<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "actstatus": (o, n) => { (o as unknown as Mailbox).actstatus = n.getNumberValue(); },
            "allowemailconnectortousecredentials": (o, n) => { (o as unknown as Mailbox).allowemailconnectortousecredentials = n.getBooleanValue(); },
            "averagetotalduration": (o, n) => { (o as unknown as Mailbox).averagetotalduration = n.getNumberValue(); },
            "bulkoperation_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).bulkoperation_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "campaignactivity_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).campaignactivity_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "campaignresponse_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).campaignresponse_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Mailbox).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Mailbox).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Mailbox).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "email_sendermailboxid_mailbox": (o, n) => { (o as unknown as Mailbox).email_sendermailboxid_mailbox = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "emailaddress": (o, n) => { (o as unknown as Mailbox).emailaddress = n.getStringValue(); },
            "emailrouteraccessapproval": (o, n) => { (o as unknown as Mailbox).emailrouteraccessapproval = n.getNumberValue(); },
            "emailserverprofile": (o, n) => { (o as unknown as Mailbox).emailserverprofile = n.getObjectValue<Emailserverprofile>(createEmailserverprofileFromDiscriminatorValue); },
            "enabledforact": (o, n) => { (o as unknown as Mailbox).enabledforact = n.getBooleanValue(); },
            "enabledforincomingemail": (o, n) => { (o as unknown as Mailbox).enabledforincomingemail = n.getBooleanValue(); },
            "enabledforoutgoingemail": (o, n) => { (o as unknown as Mailbox).enabledforoutgoingemail = n.getBooleanValue(); },
            "entityimage": (o, n) => { (o as unknown as Mailbox).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Mailbox).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Mailbox).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Mailbox).entityimageid = n.getStringValue(); },
            "ewsurl": (o, n) => { (o as unknown as Mailbox).ewsurl = n.getStringValue(); },
            "exchangecontactsimportcompletedon": (o, n) => { (o as unknown as Mailbox).exchangecontactsimportcompletedon = n.getDateValue(); },
            "exchangecontactsimportstatus": (o, n) => { (o as unknown as Mailbox).exchangecontactsimportstatus = n.getNumberValue(); },
            "exchangesyncstatexml": (o, n) => { (o as unknown as Mailbox).exchangesyncstatexml = n.getStringValue(); },
            "exchangesyncstatexmlfileref": (o, n) => { (o as unknown as Mailbox).exchangesyncstatexmlfileref = n.getStringValue(); },
            "exchangesyncstatexmlfileref_name": (o, n) => { (o as unknown as Mailbox).exchangesyncstatexmlfileref_name = n.getStringValue(); },
            "folderhierarchy": (o, n) => { (o as unknown as Mailbox).folderhierarchy = n.getStringValue(); },
            "forcedunlockcount": (o, n) => { (o as unknown as Mailbox).forcedunlockcount = n.getNumberValue(); },
            "hostid": (o, n) => { (o as unknown as Mailbox).hostid = n.getStringValue(); },
            "incidentresolution_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).incidentresolution_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Incidentresolution>(createIncidentresolutionFromDiscriminatorValue); },
            "incomingemaildeliverymethod": (o, n) => { (o as unknown as Mailbox).incomingemaildeliverymethod = n.getNumberValue(); },
            "incomingemailstatus": (o, n) => { (o as unknown as Mailbox).incomingemailstatus = n.getNumberValue(); },
            "isactsyncorgflagset": (o, n) => { (o as unknown as Mailbox).isactsyncorgflagset = n.getBooleanValue(); },
            "isemailaddressapprovedbyo365admin": (o, n) => { (o as unknown as Mailbox).isemailaddressapprovedbyo365admin = n.getBooleanValue(); },
            "isexchangecontactsimportscheduled": (o, n) => { (o as unknown as Mailbox).isexchangecontactsimportscheduled = n.getBooleanValue(); },
            "isforwardmailbox": (o, n) => { (o as unknown as Mailbox).isforwardmailbox = n.getBooleanValue(); },
            "isoauthaccesstokenset": (o, n) => { (o as unknown as Mailbox).isoauthaccesstokenset = n.getBooleanValue(); },
            "isoauthrefreshtokenset": (o, n) => { (o as unknown as Mailbox).isoauthrefreshtokenset = n.getBooleanValue(); },
            "ispasswordset": (o, n) => { (o as unknown as Mailbox).ispasswordset = n.getBooleanValue(); },
            "isserviceaccount": (o, n) => { (o as unknown as Mailbox).isserviceaccount = n.getBooleanValue(); },
            "itemsfailedforlastsync": (o, n) => { (o as unknown as Mailbox).itemsfailedforlastsync = n.getNumberValue(); },
            "itemsprocessedforlastsync": (o, n) => { (o as unknown as Mailbox).itemsprocessedforlastsync = n.getNumberValue(); },
            "lastautodiscoveredon": (o, n) => { (o as unknown as Mailbox).lastautodiscoveredon = n.getDateValue(); },
            "lastduration": (o, n) => { (o as unknown as Mailbox).lastduration = n.getNumberValue(); },
            "lastmailboxforcedunlockoccurredon": (o, n) => { (o as unknown as Mailbox).lastmailboxforcedunlockoccurredon = n.getDateValue(); },
            "lastsuccessfulsynccompletedon": (o, n) => { (o as unknown as Mailbox).lastsuccessfulsynccompletedon = n.getDateValue(); },
            "lastsyncerror": (o, n) => { (o as unknown as Mailbox).lastsyncerror = n.getStringValue(); },
            "lastsyncerrorcode": (o, n) => { (o as unknown as Mailbox).lastsyncerrorcode = n.getNumberValue(); },
            "lastsyncerrorcount": (o, n) => { (o as unknown as Mailbox).lastsyncerrorcount = n.getNumberValue(); },
            "lastsyncerrormachinename": (o, n) => { (o as unknown as Mailbox).lastsyncerrormachinename = n.getStringValue(); },
            "lastsyncerroroccurredon": (o, n) => { (o as unknown as Mailbox).lastsyncerroroccurredon = n.getDateValue(); },
            "lastsyncstartedon": (o, n) => { (o as unknown as Mailbox).lastsyncstartedon = n.getDateValue(); },
            "lasttaggedmessageid": (o, n) => { (o as unknown as Mailbox).lasttaggedmessageid = n.getStringValue(); },
            "mailbox_Annotation": (o, n) => { (o as unknown as Mailbox).mailbox_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "mailbox_asyncoperations": (o, n) => { (o as unknown as Mailbox).mailbox_asyncoperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "mailbox_email_ReceivingMailboxId": (o, n) => { (o as unknown as Mailbox).mailbox_email_ReceivingMailboxId = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "mailbox_FileAttachments": (o, n) => { (o as unknown as Mailbox).mailbox_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "mailbox_MailboxTrackingFolder": (o, n) => { (o as unknown as Mailbox).mailbox_MailboxTrackingFolder = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "mailbox_processsessions": (o, n) => { (o as unknown as Mailbox).mailbox_processsessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "mailbox_SyncErrors": (o, n) => { (o as unknown as Mailbox).mailbox_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "mailboxid": (o, n) => { (o as unknown as Mailbox).mailboxid = n.getStringValue(); },
            "mailboxprocessingcontext": (o, n) => { (o as unknown as Mailbox).mailboxprocessingcontext = n.getNumberValue(); },
            "mailboxstatus": (o, n) => { (o as unknown as Mailbox).mailboxstatus = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Mailbox).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Mailbox).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Mailbox).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_approval_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).msdyn_approval_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Msdyn_approval>(createMsdyn_approvalFromDiscriminatorValue); },
            "msdyn_bookingalert_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).msdyn_bookingalert_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Msdyn_bookingalert>(createMsdyn_bookingalertFromDiscriminatorValue); },
            "msdyn_ocliveworkitem_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).msdyn_ocliveworkitem_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_ocoutboundmessage_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).msdyn_ocoutboundmessage_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Msdyn_ocoutboundmessage>(createMsdyn_ocoutboundmessageFromDiscriminatorValue); },
            "msdyn_ocsession_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).msdyn_ocsession_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msfp_alert_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).msfp_alert_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Msfp_alert>(createMsfp_alertFromDiscriminatorValue); },
            "msfp_surveyinvite_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).msfp_surveyinvite_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Msfp_surveyinvite>(createMsfp_surveyinviteFromDiscriminatorValue); },
            "msfp_surveyresponse_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).msfp_surveyresponse_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Msfp_surveyresponse>(createMsfp_surveyresponseFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Mailbox).name = n.getStringValue(); },
            "nextscheduledactsyncinseconds": (o, n) => { (o as unknown as Mailbox).nextscheduledactsyncinseconds = n.getNumberValue(); },
            "noactcount": (o, n) => { (o as unknown as Mailbox).noactcount = n.getNumberValue(); },
            "noemailcount": (o, n) => { (o as unknown as Mailbox).noemailcount = n.getNumberValue(); },
            "oauthaccesstoken": (o, n) => { (o as unknown as Mailbox).oauthaccesstoken = n.getStringValue(); },
            "oauthrefreshtoken": (o, n) => { (o as unknown as Mailbox).oauthrefreshtoken = n.getStringValue(); },
            "oauthtokenexpireson": (o, n) => { (o as unknown as Mailbox).oauthtokenexpireson = n.getDateValue(); },
            "officeappsdeploymentcompleteon": (o, n) => { (o as unknown as Mailbox).officeappsdeploymentcompleteon = n.getDateValue(); },
            "officeappsdeploymenterror": (o, n) => { (o as unknown as Mailbox).officeappsdeploymenterror = n.getStringValue(); },
            "officeappsdeploymentscheduled": (o, n) => { (o as unknown as Mailbox).officeappsdeploymentscheduled = n.getBooleanValue(); },
            "officeappsdeploymentstatus": (o, n) => { (o as unknown as Mailbox).officeappsdeploymentstatus = n.getNumberValue(); },
            "opportunityclose_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).opportunityclose_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Opportunityclose>(createOpportunitycloseFromDiscriminatorValue); },
            "orderclose_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).orderclose_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Orderclose>(createOrdercloseFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Mailbox).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "orgmarkedasprimaryforexchangesync": (o, n) => { (o as unknown as Mailbox).orgmarkedasprimaryforexchangesync = n.getBooleanValue(); },
            "outgoingemaildeliverymethod": (o, n) => { (o as unknown as Mailbox).outgoingemaildeliverymethod = n.getNumberValue(); },
            "outgoingemailstatus": (o, n) => { (o as unknown as Mailbox).outgoingemailstatus = n.getNumberValue(); },
            "ownerid": (o, n) => { (o as unknown as Mailbox).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Mailbox).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Mailbox).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Mailbox).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "password": (o, n) => { (o as unknown as Mailbox).password = n.getStringValue(); },
            "postponemailboxprocessinguntil": (o, n) => { (o as unknown as Mailbox).postponemailboxprocessinguntil = n.getDateValue(); },
            "postponeofficeappsdeploymentuntil": (o, n) => { (o as unknown as Mailbox).postponeofficeappsdeploymentuntil = n.getDateValue(); },
            "postponesendinguntil": (o, n) => { (o as unknown as Mailbox).postponesendinguntil = n.getDateValue(); },
            "postponetestemailconfigurationuntil": (o, n) => { (o as unknown as Mailbox).postponetestemailconfigurationuntil = n.getDateValue(); },
            "processanddeleteemails": (o, n) => { (o as unknown as Mailbox).processanddeleteemails = n.getBooleanValue(); },
            "processedtimes": (o, n) => { (o as unknown as Mailbox).processedtimes = n.getNumberValue(); },
            "processemailreceivedafter": (o, n) => { (o as unknown as Mailbox).processemailreceivedafter = n.getDateValue(); },
            "processinglastattemptedon": (o, n) => { (o as unknown as Mailbox).processinglastattemptedon = n.getDateValue(); },
            "processingstatecode": (o, n) => { (o as unknown as Mailbox).processingstatecode = n.getNumberValue(); },
            "queue_defaultmailbox_mailbox": (o, n) => { (o as unknown as Mailbox).queue_defaultmailbox_mailbox = n.getCollectionOfObjectValues<Queue>(createQueueFromDiscriminatorValue); },
            "quoteclose_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).quoteclose_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Quoteclose>(createQuotecloseFromDiscriminatorValue); },
            "receivingpostponeduntil": (o, n) => { (o as unknown as Mailbox).receivingpostponeduntil = n.getDateValue(); },
            "receivingpostponeduntilforact": (o, n) => { (o as unknown as Mailbox).receivingpostponeduntilforact = n.getDateValue(); },
            "regardingobjectid": (o, n) => { (o as unknown as Mailbox).regardingobjectid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_queue": (o, n) => { (o as unknown as Mailbox).regardingobjectid_queue = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "serviceappointment_mailbox_sendermailboxid": (o, n) => { (o as unknown as Mailbox).serviceappointment_mailbox_sendermailboxid = n.getCollectionOfObjectValues<Serviceappointment>(createServiceappointmentFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Mailbox).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Mailbox).statuscode = n.getNumberValue(); },
            "systemuser_defaultmailbox_mailbox": (o, n) => { (o as unknown as Mailbox).systemuser_defaultmailbox_mailbox = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "tagemailsafter": (o, n) => { (o as unknown as Mailbox).tagemailsafter = n.getDateValue(); },
            "testemailconfigurationretrycount": (o, n) => { (o as unknown as Mailbox).testemailconfigurationretrycount = n.getNumberValue(); },
            "testemailconfigurationscheduled": (o, n) => { (o as unknown as Mailbox).testemailconfigurationscheduled = n.getBooleanValue(); },
            "testmailboxaccesscompletedon": (o, n) => { (o as unknown as Mailbox).testmailboxaccesscompletedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Mailbox).timezoneruleversionnumber = n.getNumberValue(); },
            "tracelog_Mailbox": (o, n) => { (o as unknown as Mailbox).tracelog_Mailbox = n.getCollectionOfObjectValues<Tracelog>(createTracelogFromDiscriminatorValue); },
            "transientfailurecount": (o, n) => { (o as unknown as Mailbox).transientfailurecount = n.getNumberValue(); },
            "undeliverablefolder": (o, n) => { (o as unknown as Mailbox).undeliverablefolder = n.getStringValue(); },
            "username": (o, n) => { (o as unknown as Mailbox).username = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Mailbox).utcconversiontimezonecode = n.getNumberValue(); },
            "verboseloggingenabled": (o, n) => { (o as unknown as Mailbox).verboseloggingenabled = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Mailbox).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the hostid property value. 
     * @returns a string
     */
    public get hostid() {
        return this._hostid;
    };
    /**
     * Sets the hostid property value. 
     * @param value Value to set for the hostid property.
     */
    public set hostid(value: string | undefined) {
        this._hostid = value;
    };
    /**
     * Gets the incidentresolution_mailbox_sendermailboxid property value. 
     * @returns a incidentresolution
     */
    public get incidentresolution_mailbox_sendermailboxid() {
        return this._incidentresolution_mailbox_sendermailboxid;
    };
    /**
     * Sets the incidentresolution_mailbox_sendermailboxid property value. 
     * @param value Value to set for the incidentresolution_mailbox_sendermailboxid property.
     */
    public set incidentresolution_mailbox_sendermailboxid(value: Incidentresolution[] | undefined) {
        this._incidentresolution_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the incomingemaildeliverymethod property value. 
     * @returns a integer
     */
    public get incomingemaildeliverymethod() {
        return this._incomingemaildeliverymethod;
    };
    /**
     * Sets the incomingemaildeliverymethod property value. 
     * @param value Value to set for the incomingemaildeliverymethod property.
     */
    public set incomingemaildeliverymethod(value: number | undefined) {
        this._incomingemaildeliverymethod = value;
    };
    /**
     * Gets the incomingemailstatus property value. 
     * @returns a integer
     */
    public get incomingemailstatus() {
        return this._incomingemailstatus;
    };
    /**
     * Sets the incomingemailstatus property value. 
     * @param value Value to set for the incomingemailstatus property.
     */
    public set incomingemailstatus(value: number | undefined) {
        this._incomingemailstatus = value;
    };
    /**
     * Gets the isactsyncorgflagset property value. 
     * @returns a boolean
     */
    public get isactsyncorgflagset() {
        return this._isactsyncorgflagset;
    };
    /**
     * Sets the isactsyncorgflagset property value. 
     * @param value Value to set for the isactsyncorgflagset property.
     */
    public set isactsyncorgflagset(value: boolean | undefined) {
        this._isactsyncorgflagset = value;
    };
    /**
     * Gets the isemailaddressapprovedbyo365admin property value. 
     * @returns a boolean
     */
    public get isemailaddressapprovedbyo365admin() {
        return this._isemailaddressapprovedbyo365admin;
    };
    /**
     * Sets the isemailaddressapprovedbyo365admin property value. 
     * @param value Value to set for the isemailaddressapprovedbyo365admin property.
     */
    public set isemailaddressapprovedbyo365admin(value: boolean | undefined) {
        this._isemailaddressapprovedbyo365admin = value;
    };
    /**
     * Gets the isexchangecontactsimportscheduled property value. 
     * @returns a boolean
     */
    public get isexchangecontactsimportscheduled() {
        return this._isexchangecontactsimportscheduled;
    };
    /**
     * Sets the isexchangecontactsimportscheduled property value. 
     * @param value Value to set for the isexchangecontactsimportscheduled property.
     */
    public set isexchangecontactsimportscheduled(value: boolean | undefined) {
        this._isexchangecontactsimportscheduled = value;
    };
    /**
     * Gets the isforwardmailbox property value. 
     * @returns a boolean
     */
    public get isforwardmailbox() {
        return this._isforwardmailbox;
    };
    /**
     * Sets the isforwardmailbox property value. 
     * @param value Value to set for the isforwardmailbox property.
     */
    public set isforwardmailbox(value: boolean | undefined) {
        this._isforwardmailbox = value;
    };
    /**
     * Gets the isoauthaccesstokenset property value. 
     * @returns a boolean
     */
    public get isoauthaccesstokenset() {
        return this._isoauthaccesstokenset;
    };
    /**
     * Sets the isoauthaccesstokenset property value. 
     * @param value Value to set for the isoauthaccesstokenset property.
     */
    public set isoauthaccesstokenset(value: boolean | undefined) {
        this._isoauthaccesstokenset = value;
    };
    /**
     * Gets the isoauthrefreshtokenset property value. 
     * @returns a boolean
     */
    public get isoauthrefreshtokenset() {
        return this._isoauthrefreshtokenset;
    };
    /**
     * Sets the isoauthrefreshtokenset property value. 
     * @param value Value to set for the isoauthrefreshtokenset property.
     */
    public set isoauthrefreshtokenset(value: boolean | undefined) {
        this._isoauthrefreshtokenset = value;
    };
    /**
     * Gets the ispasswordset property value. 
     * @returns a boolean
     */
    public get ispasswordset() {
        return this._ispasswordset;
    };
    /**
     * Sets the ispasswordset property value. 
     * @param value Value to set for the ispasswordset property.
     */
    public set ispasswordset(value: boolean | undefined) {
        this._ispasswordset = value;
    };
    /**
     * Gets the isserviceaccount property value. 
     * @returns a boolean
     */
    public get isserviceaccount() {
        return this._isserviceaccount;
    };
    /**
     * Sets the isserviceaccount property value. 
     * @param value Value to set for the isserviceaccount property.
     */
    public set isserviceaccount(value: boolean | undefined) {
        this._isserviceaccount = value;
    };
    /**
     * Gets the itemsfailedforlastsync property value. 
     * @returns a integer
     */
    public get itemsfailedforlastsync() {
        return this._itemsfailedforlastsync;
    };
    /**
     * Sets the itemsfailedforlastsync property value. 
     * @param value Value to set for the itemsfailedforlastsync property.
     */
    public set itemsfailedforlastsync(value: number | undefined) {
        this._itemsfailedforlastsync = value;
    };
    /**
     * Gets the itemsprocessedforlastsync property value. 
     * @returns a integer
     */
    public get itemsprocessedforlastsync() {
        return this._itemsprocessedforlastsync;
    };
    /**
     * Sets the itemsprocessedforlastsync property value. 
     * @param value Value to set for the itemsprocessedforlastsync property.
     */
    public set itemsprocessedforlastsync(value: number | undefined) {
        this._itemsprocessedforlastsync = value;
    };
    /**
     * Gets the lastautodiscoveredon property value. 
     * @returns a Date
     */
    public get lastautodiscoveredon() {
        return this._lastautodiscoveredon;
    };
    /**
     * Sets the lastautodiscoveredon property value. 
     * @param value Value to set for the lastautodiscoveredon property.
     */
    public set lastautodiscoveredon(value: Date | undefined) {
        this._lastautodiscoveredon = value;
    };
    /**
     * Gets the lastduration property value. 
     * @returns a integer
     */
    public get lastduration() {
        return this._lastduration;
    };
    /**
     * Sets the lastduration property value. 
     * @param value Value to set for the lastduration property.
     */
    public set lastduration(value: number | undefined) {
        this._lastduration = value;
    };
    /**
     * Gets the lastmailboxforcedunlockoccurredon property value. 
     * @returns a Date
     */
    public get lastmailboxforcedunlockoccurredon() {
        return this._lastmailboxforcedunlockoccurredon;
    };
    /**
     * Sets the lastmailboxforcedunlockoccurredon property value. 
     * @param value Value to set for the lastmailboxforcedunlockoccurredon property.
     */
    public set lastmailboxforcedunlockoccurredon(value: Date | undefined) {
        this._lastmailboxforcedunlockoccurredon = value;
    };
    /**
     * Gets the lastsuccessfulsynccompletedon property value. 
     * @returns a Date
     */
    public get lastsuccessfulsynccompletedon() {
        return this._lastsuccessfulsynccompletedon;
    };
    /**
     * Sets the lastsuccessfulsynccompletedon property value. 
     * @param value Value to set for the lastsuccessfulsynccompletedon property.
     */
    public set lastsuccessfulsynccompletedon(value: Date | undefined) {
        this._lastsuccessfulsynccompletedon = value;
    };
    /**
     * Gets the lastsyncerror property value. 
     * @returns a string
     */
    public get lastsyncerror() {
        return this._lastsyncerror;
    };
    /**
     * Sets the lastsyncerror property value. 
     * @param value Value to set for the lastsyncerror property.
     */
    public set lastsyncerror(value: string | undefined) {
        this._lastsyncerror = value;
    };
    /**
     * Gets the lastsyncerrorcode property value. 
     * @returns a integer
     */
    public get lastsyncerrorcode() {
        return this._lastsyncerrorcode;
    };
    /**
     * Sets the lastsyncerrorcode property value. 
     * @param value Value to set for the lastsyncerrorcode property.
     */
    public set lastsyncerrorcode(value: number | undefined) {
        this._lastsyncerrorcode = value;
    };
    /**
     * Gets the lastsyncerrorcount property value. 
     * @returns a integer
     */
    public get lastsyncerrorcount() {
        return this._lastsyncerrorcount;
    };
    /**
     * Sets the lastsyncerrorcount property value. 
     * @param value Value to set for the lastsyncerrorcount property.
     */
    public set lastsyncerrorcount(value: number | undefined) {
        this._lastsyncerrorcount = value;
    };
    /**
     * Gets the lastsyncerrormachinename property value. 
     * @returns a string
     */
    public get lastsyncerrormachinename() {
        return this._lastsyncerrormachinename;
    };
    /**
     * Sets the lastsyncerrormachinename property value. 
     * @param value Value to set for the lastsyncerrormachinename property.
     */
    public set lastsyncerrormachinename(value: string | undefined) {
        this._lastsyncerrormachinename = value;
    };
    /**
     * Gets the lastsyncerroroccurredon property value. 
     * @returns a Date
     */
    public get lastsyncerroroccurredon() {
        return this._lastsyncerroroccurredon;
    };
    /**
     * Sets the lastsyncerroroccurredon property value. 
     * @param value Value to set for the lastsyncerroroccurredon property.
     */
    public set lastsyncerroroccurredon(value: Date | undefined) {
        this._lastsyncerroroccurredon = value;
    };
    /**
     * Gets the lastsyncstartedon property value. 
     * @returns a Date
     */
    public get lastsyncstartedon() {
        return this._lastsyncstartedon;
    };
    /**
     * Sets the lastsyncstartedon property value. 
     * @param value Value to set for the lastsyncstartedon property.
     */
    public set lastsyncstartedon(value: Date | undefined) {
        this._lastsyncstartedon = value;
    };
    /**
     * Gets the lasttaggedmessageid property value. 
     * @returns a string
     */
    public get lasttaggedmessageid() {
        return this._lasttaggedmessageid;
    };
    /**
     * Sets the lasttaggedmessageid property value. 
     * @param value Value to set for the lasttaggedmessageid property.
     */
    public set lasttaggedmessageid(value: string | undefined) {
        this._lasttaggedmessageid = value;
    };
    /**
     * Gets the mailbox_Annotation property value. 
     * @returns a annotation
     */
    public get mailbox_Annotation() {
        return this._mailbox_Annotation;
    };
    /**
     * Sets the mailbox_Annotation property value. 
     * @param value Value to set for the Mailbox_Annotation property.
     */
    public set mailbox_Annotation(value: Annotation[] | undefined) {
        this._mailbox_Annotation = value;
    };
    /**
     * Gets the mailbox_asyncoperations property value. 
     * @returns a asyncoperation
     */
    public get mailbox_asyncoperations() {
        return this._mailbox_asyncoperations;
    };
    /**
     * Sets the mailbox_asyncoperations property value. 
     * @param value Value to set for the mailbox_asyncoperations property.
     */
    public set mailbox_asyncoperations(value: Asyncoperation[] | undefined) {
        this._mailbox_asyncoperations = value;
    };
    /**
     * Gets the mailbox_email_ReceivingMailboxId property value. 
     * @returns a email
     */
    public get mailbox_email_ReceivingMailboxId() {
        return this._mailbox_email_ReceivingMailboxId;
    };
    /**
     * Sets the mailbox_email_ReceivingMailboxId property value. 
     * @param value Value to set for the mailbox_email_ReceivingMailboxId property.
     */
    public set mailbox_email_ReceivingMailboxId(value: Email[] | undefined) {
        this._mailbox_email_ReceivingMailboxId = value;
    };
    /**
     * Gets the mailbox_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get mailbox_FileAttachments() {
        return this._mailbox_FileAttachments;
    };
    /**
     * Sets the mailbox_FileAttachments property value. 
     * @param value Value to set for the mailbox_FileAttachments property.
     */
    public set mailbox_FileAttachments(value: Fileattachment[] | undefined) {
        this._mailbox_FileAttachments = value;
    };
    /**
     * Gets the mailbox_MailboxTrackingFolder property value. 
     * @returns a mailboxtrackingfolder
     */
    public get mailbox_MailboxTrackingFolder() {
        return this._mailbox_MailboxTrackingFolder;
    };
    /**
     * Sets the mailbox_MailboxTrackingFolder property value. 
     * @param value Value to set for the Mailbox_MailboxTrackingFolder property.
     */
    public set mailbox_MailboxTrackingFolder(value: Mailboxtrackingfolder[] | undefined) {
        this._mailbox_MailboxTrackingFolder = value;
    };
    /**
     * Gets the mailbox_processsessions property value. 
     * @returns a processsession
     */
    public get mailbox_processsessions() {
        return this._mailbox_processsessions;
    };
    /**
     * Sets the mailbox_processsessions property value. 
     * @param value Value to set for the mailbox_processsessions property.
     */
    public set mailbox_processsessions(value: Processsession[] | undefined) {
        this._mailbox_processsessions = value;
    };
    /**
     * Gets the mailbox_SyncErrors property value. 
     * @returns a syncerror
     */
    public get mailbox_SyncErrors() {
        return this._mailbox_SyncErrors;
    };
    /**
     * Sets the mailbox_SyncErrors property value. 
     * @param value Value to set for the Mailbox_SyncErrors property.
     */
    public set mailbox_SyncErrors(value: Syncerror[] | undefined) {
        this._mailbox_SyncErrors = value;
    };
    /**
     * Gets the mailboxid property value. 
     * @returns a string
     */
    public get mailboxid() {
        return this._mailboxid;
    };
    /**
     * Sets the mailboxid property value. 
     * @param value Value to set for the mailboxid property.
     */
    public set mailboxid(value: string | undefined) {
        this._mailboxid = value;
    };
    /**
     * Gets the mailboxprocessingcontext property value. 
     * @returns a integer
     */
    public get mailboxprocessingcontext() {
        return this._mailboxprocessingcontext;
    };
    /**
     * Sets the mailboxprocessingcontext property value. 
     * @param value Value to set for the mailboxprocessingcontext property.
     */
    public set mailboxprocessingcontext(value: number | undefined) {
        this._mailboxprocessingcontext = value;
    };
    /**
     * Gets the mailboxstatus property value. 
     * @returns a integer
     */
    public get mailboxstatus() {
        return this._mailboxstatus;
    };
    /**
     * Sets the mailboxstatus property value. 
     * @param value Value to set for the mailboxstatus property.
     */
    public set mailboxstatus(value: number | undefined) {
        this._mailboxstatus = value;
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
     * Gets the msdyn_approval_mailbox_sendermailboxid property value. 
     * @returns a msdyn_approval
     */
    public get msdyn_approval_mailbox_sendermailboxid() {
        return this._msdyn_approval_mailbox_sendermailboxid;
    };
    /**
     * Sets the msdyn_approval_mailbox_sendermailboxid property value. 
     * @param value Value to set for the msdyn_approval_mailbox_sendermailboxid property.
     */
    public set msdyn_approval_mailbox_sendermailboxid(value: Msdyn_approval[] | undefined) {
        this._msdyn_approval_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the msdyn_bookingalert_mailbox_sendermailboxid property value. 
     * @returns a msdyn_bookingalert
     */
    public get msdyn_bookingalert_mailbox_sendermailboxid() {
        return this._msdyn_bookingalert_mailbox_sendermailboxid;
    };
    /**
     * Sets the msdyn_bookingalert_mailbox_sendermailboxid property value. 
     * @param value Value to set for the msdyn_bookingalert_mailbox_sendermailboxid property.
     */
    public set msdyn_bookingalert_mailbox_sendermailboxid(value: Msdyn_bookingalert[] | undefined) {
        this._msdyn_bookingalert_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the msdyn_ocliveworkitem_mailbox_sendermailboxid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_ocliveworkitem_mailbox_sendermailboxid() {
        return this._msdyn_ocliveworkitem_mailbox_sendermailboxid;
    };
    /**
     * Sets the msdyn_ocliveworkitem_mailbox_sendermailboxid property value. 
     * @param value Value to set for the msdyn_ocliveworkitem_mailbox_sendermailboxid property.
     */
    public set msdyn_ocliveworkitem_mailbox_sendermailboxid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_ocliveworkitem_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the msdyn_ocoutboundmessage_mailbox_sendermailboxid property value. 
     * @returns a msdyn_ocoutboundmessage
     */
    public get msdyn_ocoutboundmessage_mailbox_sendermailboxid() {
        return this._msdyn_ocoutboundmessage_mailbox_sendermailboxid;
    };
    /**
     * Sets the msdyn_ocoutboundmessage_mailbox_sendermailboxid property value. 
     * @param value Value to set for the msdyn_ocoutboundmessage_mailbox_sendermailboxid property.
     */
    public set msdyn_ocoutboundmessage_mailbox_sendermailboxid(value: Msdyn_ocoutboundmessage[] | undefined) {
        this._msdyn_ocoutboundmessage_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the msdyn_ocsession_mailbox_sendermailboxid property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_ocsession_mailbox_sendermailboxid() {
        return this._msdyn_ocsession_mailbox_sendermailboxid;
    };
    /**
     * Sets the msdyn_ocsession_mailbox_sendermailboxid property value. 
     * @param value Value to set for the msdyn_ocsession_mailbox_sendermailboxid property.
     */
    public set msdyn_ocsession_mailbox_sendermailboxid(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_ocsession_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the msfp_alert_mailbox_sendermailboxid property value. 
     * @returns a msfp_alert
     */
    public get msfp_alert_mailbox_sendermailboxid() {
        return this._msfp_alert_mailbox_sendermailboxid;
    };
    /**
     * Sets the msfp_alert_mailbox_sendermailboxid property value. 
     * @param value Value to set for the msfp_alert_mailbox_sendermailboxid property.
     */
    public set msfp_alert_mailbox_sendermailboxid(value: Msfp_alert[] | undefined) {
        this._msfp_alert_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the msfp_surveyinvite_mailbox_sendermailboxid property value. 
     * @returns a msfp_surveyinvite
     */
    public get msfp_surveyinvite_mailbox_sendermailboxid() {
        return this._msfp_surveyinvite_mailbox_sendermailboxid;
    };
    /**
     * Sets the msfp_surveyinvite_mailbox_sendermailboxid property value. 
     * @param value Value to set for the msfp_surveyinvite_mailbox_sendermailboxid property.
     */
    public set msfp_surveyinvite_mailbox_sendermailboxid(value: Msfp_surveyinvite[] | undefined) {
        this._msfp_surveyinvite_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the msfp_surveyresponse_mailbox_sendermailboxid property value. 
     * @returns a msfp_surveyresponse
     */
    public get msfp_surveyresponse_mailbox_sendermailboxid() {
        return this._msfp_surveyresponse_mailbox_sendermailboxid;
    };
    /**
     * Sets the msfp_surveyresponse_mailbox_sendermailboxid property value. 
     * @param value Value to set for the msfp_surveyresponse_mailbox_sendermailboxid property.
     */
    public set msfp_surveyresponse_mailbox_sendermailboxid(value: Msfp_surveyresponse[] | undefined) {
        this._msfp_surveyresponse_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the nextscheduledactsyncinseconds property value. 
     * @returns a integer
     */
    public get nextscheduledactsyncinseconds() {
        return this._nextscheduledactsyncinseconds;
    };
    /**
     * Sets the nextscheduledactsyncinseconds property value. 
     * @param value Value to set for the nextscheduledactsyncinseconds property.
     */
    public set nextscheduledactsyncinseconds(value: number | undefined) {
        this._nextscheduledactsyncinseconds = value;
    };
    /**
     * Gets the noactcount property value. 
     * @returns a integer
     */
    public get noactcount() {
        return this._noactcount;
    };
    /**
     * Sets the noactcount property value. 
     * @param value Value to set for the noactcount property.
     */
    public set noactcount(value: number | undefined) {
        this._noactcount = value;
    };
    /**
     * Gets the noemailcount property value. 
     * @returns a integer
     */
    public get noemailcount() {
        return this._noemailcount;
    };
    /**
     * Sets the noemailcount property value. 
     * @param value Value to set for the noemailcount property.
     */
    public set noemailcount(value: number | undefined) {
        this._noemailcount = value;
    };
    /**
     * Gets the oauthaccesstoken property value. 
     * @returns a string
     */
    public get oauthaccesstoken() {
        return this._oauthaccesstoken;
    };
    /**
     * Sets the oauthaccesstoken property value. 
     * @param value Value to set for the oauthaccesstoken property.
     */
    public set oauthaccesstoken(value: string | undefined) {
        this._oauthaccesstoken = value;
    };
    /**
     * Gets the oauthrefreshtoken property value. 
     * @returns a string
     */
    public get oauthrefreshtoken() {
        return this._oauthrefreshtoken;
    };
    /**
     * Sets the oauthrefreshtoken property value. 
     * @param value Value to set for the oauthrefreshtoken property.
     */
    public set oauthrefreshtoken(value: string | undefined) {
        this._oauthrefreshtoken = value;
    };
    /**
     * Gets the oauthtokenexpireson property value. 
     * @returns a Date
     */
    public get oauthtokenexpireson() {
        return this._oauthtokenexpireson;
    };
    /**
     * Sets the oauthtokenexpireson property value. 
     * @param value Value to set for the oauthtokenexpireson property.
     */
    public set oauthtokenexpireson(value: Date | undefined) {
        this._oauthtokenexpireson = value;
    };
    /**
     * Gets the officeappsdeploymentcompleteon property value. 
     * @returns a Date
     */
    public get officeappsdeploymentcompleteon() {
        return this._officeappsdeploymentcompleteon;
    };
    /**
     * Sets the officeappsdeploymentcompleteon property value. 
     * @param value Value to set for the officeappsdeploymentcompleteon property.
     */
    public set officeappsdeploymentcompleteon(value: Date | undefined) {
        this._officeappsdeploymentcompleteon = value;
    };
    /**
     * Gets the officeappsdeploymenterror property value. 
     * @returns a string
     */
    public get officeappsdeploymenterror() {
        return this._officeappsdeploymenterror;
    };
    /**
     * Sets the officeappsdeploymenterror property value. 
     * @param value Value to set for the officeappsdeploymenterror property.
     */
    public set officeappsdeploymenterror(value: string | undefined) {
        this._officeappsdeploymenterror = value;
    };
    /**
     * Gets the officeappsdeploymentscheduled property value. 
     * @returns a boolean
     */
    public get officeappsdeploymentscheduled() {
        return this._officeappsdeploymentscheduled;
    };
    /**
     * Sets the officeappsdeploymentscheduled property value. 
     * @param value Value to set for the officeappsdeploymentscheduled property.
     */
    public set officeappsdeploymentscheduled(value: boolean | undefined) {
        this._officeappsdeploymentscheduled = value;
    };
    /**
     * Gets the officeappsdeploymentstatus property value. 
     * @returns a integer
     */
    public get officeappsdeploymentstatus() {
        return this._officeappsdeploymentstatus;
    };
    /**
     * Sets the officeappsdeploymentstatus property value. 
     * @param value Value to set for the officeappsdeploymentstatus property.
     */
    public set officeappsdeploymentstatus(value: number | undefined) {
        this._officeappsdeploymentstatus = value;
    };
    /**
     * Gets the opportunityclose_mailbox_sendermailboxid property value. 
     * @returns a opportunityclose
     */
    public get opportunityclose_mailbox_sendermailboxid() {
        return this._opportunityclose_mailbox_sendermailboxid;
    };
    /**
     * Sets the opportunityclose_mailbox_sendermailboxid property value. 
     * @param value Value to set for the opportunityclose_mailbox_sendermailboxid property.
     */
    public set opportunityclose_mailbox_sendermailboxid(value: Opportunityclose[] | undefined) {
        this._opportunityclose_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the orderclose_mailbox_sendermailboxid property value. 
     * @returns a orderclose
     */
    public get orderclose_mailbox_sendermailboxid() {
        return this._orderclose_mailbox_sendermailboxid;
    };
    /**
     * Sets the orderclose_mailbox_sendermailboxid property value. 
     * @param value Value to set for the orderclose_mailbox_sendermailboxid property.
     */
    public set orderclose_mailbox_sendermailboxid(value: Orderclose[] | undefined) {
        this._orderclose_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the orgmarkedasprimaryforexchangesync property value. 
     * @returns a boolean
     */
    public get orgmarkedasprimaryforexchangesync() {
        return this._orgmarkedasprimaryforexchangesync;
    };
    /**
     * Sets the orgmarkedasprimaryforexchangesync property value. 
     * @param value Value to set for the orgmarkedasprimaryforexchangesync property.
     */
    public set orgmarkedasprimaryforexchangesync(value: boolean | undefined) {
        this._orgmarkedasprimaryforexchangesync = value;
    };
    /**
     * Gets the outgoingemaildeliverymethod property value. 
     * @returns a integer
     */
    public get outgoingemaildeliverymethod() {
        return this._outgoingemaildeliverymethod;
    };
    /**
     * Sets the outgoingemaildeliverymethod property value. 
     * @param value Value to set for the outgoingemaildeliverymethod property.
     */
    public set outgoingemaildeliverymethod(value: number | undefined) {
        this._outgoingemaildeliverymethod = value;
    };
    /**
     * Gets the outgoingemailstatus property value. 
     * @returns a integer
     */
    public get outgoingemailstatus() {
        return this._outgoingemailstatus;
    };
    /**
     * Sets the outgoingemailstatus property value. 
     * @param value Value to set for the outgoingemailstatus property.
     */
    public set outgoingemailstatus(value: number | undefined) {
        this._outgoingemailstatus = value;
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
     * Gets the password property value. 
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. 
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Gets the postponemailboxprocessinguntil property value. 
     * @returns a Date
     */
    public get postponemailboxprocessinguntil() {
        return this._postponemailboxprocessinguntil;
    };
    /**
     * Sets the postponemailboxprocessinguntil property value. 
     * @param value Value to set for the postponemailboxprocessinguntil property.
     */
    public set postponemailboxprocessinguntil(value: Date | undefined) {
        this._postponemailboxprocessinguntil = value;
    };
    /**
     * Gets the postponeofficeappsdeploymentuntil property value. 
     * @returns a Date
     */
    public get postponeofficeappsdeploymentuntil() {
        return this._postponeofficeappsdeploymentuntil;
    };
    /**
     * Sets the postponeofficeappsdeploymentuntil property value. 
     * @param value Value to set for the postponeofficeappsdeploymentuntil property.
     */
    public set postponeofficeappsdeploymentuntil(value: Date | undefined) {
        this._postponeofficeappsdeploymentuntil = value;
    };
    /**
     * Gets the postponesendinguntil property value. 
     * @returns a Date
     */
    public get postponesendinguntil() {
        return this._postponesendinguntil;
    };
    /**
     * Sets the postponesendinguntil property value. 
     * @param value Value to set for the postponesendinguntil property.
     */
    public set postponesendinguntil(value: Date | undefined) {
        this._postponesendinguntil = value;
    };
    /**
     * Gets the postponetestemailconfigurationuntil property value. 
     * @returns a Date
     */
    public get postponetestemailconfigurationuntil() {
        return this._postponetestemailconfigurationuntil;
    };
    /**
     * Sets the postponetestemailconfigurationuntil property value. 
     * @param value Value to set for the postponetestemailconfigurationuntil property.
     */
    public set postponetestemailconfigurationuntil(value: Date | undefined) {
        this._postponetestemailconfigurationuntil = value;
    };
    /**
     * Gets the processanddeleteemails property value. 
     * @returns a boolean
     */
    public get processanddeleteemails() {
        return this._processanddeleteemails;
    };
    /**
     * Sets the processanddeleteemails property value. 
     * @param value Value to set for the processanddeleteemails property.
     */
    public set processanddeleteemails(value: boolean | undefined) {
        this._processanddeleteemails = value;
    };
    /**
     * Gets the processedtimes property value. 
     * @returns a integer
     */
    public get processedtimes() {
        return this._processedtimes;
    };
    /**
     * Sets the processedtimes property value. 
     * @param value Value to set for the processedtimes property.
     */
    public set processedtimes(value: number | undefined) {
        this._processedtimes = value;
    };
    /**
     * Gets the processemailreceivedafter property value. 
     * @returns a Date
     */
    public get processemailreceivedafter() {
        return this._processemailreceivedafter;
    };
    /**
     * Sets the processemailreceivedafter property value. 
     * @param value Value to set for the processemailreceivedafter property.
     */
    public set processemailreceivedafter(value: Date | undefined) {
        this._processemailreceivedafter = value;
    };
    /**
     * Gets the processinglastattemptedon property value. 
     * @returns a Date
     */
    public get processinglastattemptedon() {
        return this._processinglastattemptedon;
    };
    /**
     * Sets the processinglastattemptedon property value. 
     * @param value Value to set for the processinglastattemptedon property.
     */
    public set processinglastattemptedon(value: Date | undefined) {
        this._processinglastattemptedon = value;
    };
    /**
     * Gets the processingstatecode property value. 
     * @returns a integer
     */
    public get processingstatecode() {
        return this._processingstatecode;
    };
    /**
     * Sets the processingstatecode property value. 
     * @param value Value to set for the processingstatecode property.
     */
    public set processingstatecode(value: number | undefined) {
        this._processingstatecode = value;
    };
    /**
     * Gets the queue_defaultmailbox_mailbox property value. 
     * @returns a queue
     */
    public get queue_defaultmailbox_mailbox() {
        return this._queue_defaultmailbox_mailbox;
    };
    /**
     * Sets the queue_defaultmailbox_mailbox property value. 
     * @param value Value to set for the queue_defaultmailbox_mailbox property.
     */
    public set queue_defaultmailbox_mailbox(value: Queue[] | undefined) {
        this._queue_defaultmailbox_mailbox = value;
    };
    /**
     * Gets the quoteclose_mailbox_sendermailboxid property value. 
     * @returns a quoteclose
     */
    public get quoteclose_mailbox_sendermailboxid() {
        return this._quoteclose_mailbox_sendermailboxid;
    };
    /**
     * Sets the quoteclose_mailbox_sendermailboxid property value. 
     * @param value Value to set for the quoteclose_mailbox_sendermailboxid property.
     */
    public set quoteclose_mailbox_sendermailboxid(value: Quoteclose[] | undefined) {
        this._quoteclose_mailbox_sendermailboxid = value;
    };
    /**
     * Gets the receivingpostponeduntil property value. 
     * @returns a Date
     */
    public get receivingpostponeduntil() {
        return this._receivingpostponeduntil;
    };
    /**
     * Sets the receivingpostponeduntil property value. 
     * @param value Value to set for the receivingpostponeduntil property.
     */
    public set receivingpostponeduntil(value: Date | undefined) {
        this._receivingpostponeduntil = value;
    };
    /**
     * Gets the receivingpostponeduntilforact property value. 
     * @returns a Date
     */
    public get receivingpostponeduntilforact() {
        return this._receivingpostponeduntilforact;
    };
    /**
     * Sets the receivingpostponeduntilforact property value. 
     * @param value Value to set for the receivingpostponeduntilforact property.
     */
    public set receivingpostponeduntilforact(value: Date | undefined) {
        this._receivingpostponeduntilforact = value;
    };
    /**
     * Gets the regardingobjectid property value. 
     * @returns a systemuser
     */
    public get regardingobjectid() {
        return this._regardingobjectid;
    };
    /**
     * Sets the regardingobjectid property value. 
     * @param value Value to set for the regardingobjectid property.
     */
    public set regardingobjectid(value: Systemuser | undefined) {
        this._regardingobjectid = value;
    };
    /**
     * Gets the regardingobjectid_queue property value. 
     * @returns a queue
     */
    public get regardingobjectid_queue() {
        return this._regardingobjectid_queue;
    };
    /**
     * Sets the regardingobjectid_queue property value. 
     * @param value Value to set for the regardingobjectid_queue property.
     */
    public set regardingobjectid_queue(value: Queue | undefined) {
        this._regardingobjectid_queue = value;
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
        writer.writeStringValue("_emailserverprofile_value", this._emailserverprofile_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeNumberValue("actdeliverymethod", this.actdeliverymethod);
        writer.writeCollectionOfObjectValues<Activitypointer>("activitypointer_sendermailboxid_mailbox", this.activitypointer_sendermailboxid_mailbox);
        writer.writeNumberValue("actstatus", this.actstatus);
        writer.writeBooleanValue("allowemailconnectortousecredentials", this.allowemailconnectortousecredentials);
        writer.writeNumberValue("averagetotalduration", this.averagetotalduration);
        writer.writeCollectionOfObjectValues<Bulkoperation>("bulkoperation_mailbox_sendermailboxid", this.bulkoperation_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Campaignactivity>("campaignactivity_mailbox_sendermailboxid", this.campaignactivity_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaignresponse_mailbox_sendermailboxid", this.campaignresponse_mailbox_sendermailboxid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeCollectionOfObjectValues<Email>("email_sendermailboxid_mailbox", this.email_sendermailboxid_mailbox);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeNumberValue("emailrouteraccessapproval", this.emailrouteraccessapproval);
        writer.writeObjectValue<Emailserverprofile>("emailserverprofile", this.emailserverprofile);
        writer.writeBooleanValue("enabledforact", this.enabledforact);
        writer.writeBooleanValue("enabledforincomingemail", this.enabledforincomingemail);
        writer.writeBooleanValue("enabledforoutgoingemail", this.enabledforoutgoingemail);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeStringValue("ewsurl", this.ewsurl);
        writer.writeDateValue("exchangecontactsimportcompletedon", this.exchangecontactsimportcompletedon);
        writer.writeNumberValue("exchangecontactsimportstatus", this.exchangecontactsimportstatus);
        writer.writeStringValue("exchangesyncstatexml", this.exchangesyncstatexml);
        writer.writeStringValue("exchangesyncstatexmlfileref", this.exchangesyncstatexmlfileref);
        writer.writeStringValue("exchangesyncstatexmlfileref_name", this.exchangesyncstatexmlfileref_name);
        writer.writeStringValue("folderhierarchy", this.folderhierarchy);
        writer.writeNumberValue("forcedunlockcount", this.forcedunlockcount);
        writer.writeStringValue("hostid", this.hostid);
        writer.writeCollectionOfObjectValues<Incidentresolution>("incidentresolution_mailbox_sendermailboxid", this.incidentresolution_mailbox_sendermailboxid);
        writer.writeNumberValue("incomingemaildeliverymethod", this.incomingemaildeliverymethod);
        writer.writeNumberValue("incomingemailstatus", this.incomingemailstatus);
        writer.writeBooleanValue("isactsyncorgflagset", this.isactsyncorgflagset);
        writer.writeBooleanValue("isemailaddressapprovedbyo365admin", this.isemailaddressapprovedbyo365admin);
        writer.writeBooleanValue("isexchangecontactsimportscheduled", this.isexchangecontactsimportscheduled);
        writer.writeBooleanValue("isforwardmailbox", this.isforwardmailbox);
        writer.writeBooleanValue("isoauthaccesstokenset", this.isoauthaccesstokenset);
        writer.writeBooleanValue("isoauthrefreshtokenset", this.isoauthrefreshtokenset);
        writer.writeBooleanValue("ispasswordset", this.ispasswordset);
        writer.writeBooleanValue("isserviceaccount", this.isserviceaccount);
        writer.writeNumberValue("itemsfailedforlastsync", this.itemsfailedforlastsync);
        writer.writeNumberValue("itemsprocessedforlastsync", this.itemsprocessedforlastsync);
        writer.writeDateValue("lastautodiscoveredon", this.lastautodiscoveredon);
        writer.writeNumberValue("lastduration", this.lastduration);
        writer.writeDateValue("lastmailboxforcedunlockoccurredon", this.lastmailboxforcedunlockoccurredon);
        writer.writeDateValue("lastsuccessfulsynccompletedon", this.lastsuccessfulsynccompletedon);
        writer.writeStringValue("lastsyncerror", this.lastsyncerror);
        writer.writeNumberValue("lastsyncerrorcode", this.lastsyncerrorcode);
        writer.writeNumberValue("lastsyncerrorcount", this.lastsyncerrorcount);
        writer.writeStringValue("lastsyncerrormachinename", this.lastsyncerrormachinename);
        writer.writeDateValue("lastsyncerroroccurredon", this.lastsyncerroroccurredon);
        writer.writeDateValue("lastsyncstartedon", this.lastsyncstartedon);
        writer.writeStringValue("lasttaggedmessageid", this.lasttaggedmessageid);
        writer.writeCollectionOfObjectValues<Annotation>("mailbox_Annotation", this.mailbox_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("mailbox_asyncoperations", this.mailbox_asyncoperations);
        writer.writeCollectionOfObjectValues<Email>("mailbox_email_ReceivingMailboxId", this.mailbox_email_ReceivingMailboxId);
        writer.writeCollectionOfObjectValues<Fileattachment>("mailbox_FileAttachments", this.mailbox_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("mailbox_MailboxTrackingFolder", this.mailbox_MailboxTrackingFolder);
        writer.writeCollectionOfObjectValues<Processsession>("mailbox_processsessions", this.mailbox_processsessions);
        writer.writeCollectionOfObjectValues<Syncerror>("mailbox_SyncErrors", this.mailbox_SyncErrors);
        writer.writeStringValue("mailboxid", this.mailboxid);
        writer.writeNumberValue("mailboxprocessingcontext", this.mailboxprocessingcontext);
        writer.writeNumberValue("mailboxstatus", this.mailboxstatus);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_approval>("msdyn_approval_mailbox_sendermailboxid", this.msdyn_approval_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Msdyn_bookingalert>("msdyn_bookingalert_mailbox_sendermailboxid", this.msdyn_bookingalert_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_ocliveworkitem_mailbox_sendermailboxid", this.msdyn_ocliveworkitem_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundmessage>("msdyn_ocoutboundmessage_mailbox_sendermailboxid", this.msdyn_ocoutboundmessage_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_ocsession_mailbox_sendermailboxid", this.msdyn_ocsession_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Msfp_alert>("msfp_alert_mailbox_sendermailboxid", this.msfp_alert_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Msfp_surveyinvite>("msfp_surveyinvite_mailbox_sendermailboxid", this.msfp_surveyinvite_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Msfp_surveyresponse>("msfp_surveyresponse_mailbox_sendermailboxid", this.msfp_surveyresponse_mailbox_sendermailboxid);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("nextscheduledactsyncinseconds", this.nextscheduledactsyncinseconds);
        writer.writeNumberValue("noactcount", this.noactcount);
        writer.writeNumberValue("noemailcount", this.noemailcount);
        writer.writeStringValue("oauthaccesstoken", this.oauthaccesstoken);
        writer.writeStringValue("oauthrefreshtoken", this.oauthrefreshtoken);
        writer.writeDateValue("oauthtokenexpireson", this.oauthtokenexpireson);
        writer.writeDateValue("officeappsdeploymentcompleteon", this.officeappsdeploymentcompleteon);
        writer.writeStringValue("officeappsdeploymenterror", this.officeappsdeploymenterror);
        writer.writeBooleanValue("officeappsdeploymentscheduled", this.officeappsdeploymentscheduled);
        writer.writeNumberValue("officeappsdeploymentstatus", this.officeappsdeploymentstatus);
        writer.writeCollectionOfObjectValues<Opportunityclose>("opportunityclose_mailbox_sendermailboxid", this.opportunityclose_mailbox_sendermailboxid);
        writer.writeCollectionOfObjectValues<Orderclose>("orderclose_mailbox_sendermailboxid", this.orderclose_mailbox_sendermailboxid);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeBooleanValue("orgmarkedasprimaryforexchangesync", this.orgmarkedasprimaryforexchangesync);
        writer.writeNumberValue("outgoingemaildeliverymethod", this.outgoingemaildeliverymethod);
        writer.writeNumberValue("outgoingemailstatus", this.outgoingemailstatus);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("password", this.password);
        writer.writeDateValue("postponemailboxprocessinguntil", this.postponemailboxprocessinguntil);
        writer.writeDateValue("postponeofficeappsdeploymentuntil", this.postponeofficeappsdeploymentuntil);
        writer.writeDateValue("postponesendinguntil", this.postponesendinguntil);
        writer.writeDateValue("postponetestemailconfigurationuntil", this.postponetestemailconfigurationuntil);
        writer.writeBooleanValue("processanddeleteemails", this.processanddeleteemails);
        writer.writeNumberValue("processedtimes", this.processedtimes);
        writer.writeDateValue("processemailreceivedafter", this.processemailreceivedafter);
        writer.writeDateValue("processinglastattemptedon", this.processinglastattemptedon);
        writer.writeNumberValue("processingstatecode", this.processingstatecode);
        writer.writeCollectionOfObjectValues<Queue>("queue_defaultmailbox_mailbox", this.queue_defaultmailbox_mailbox);
        writer.writeCollectionOfObjectValues<Quoteclose>("quoteclose_mailbox_sendermailboxid", this.quoteclose_mailbox_sendermailboxid);
        writer.writeDateValue("receivingpostponeduntil", this.receivingpostponeduntil);
        writer.writeDateValue("receivingpostponeduntilforact", this.receivingpostponeduntilforact);
        writer.writeObjectValue<Systemuser>("regardingobjectid", this.regardingobjectid);
        writer.writeObjectValue<Queue>("regardingobjectid_queue", this.regardingobjectid_queue);
        writer.writeCollectionOfObjectValues<Serviceappointment>("serviceappointment_mailbox_sendermailboxid", this.serviceappointment_mailbox_sendermailboxid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Systemuser>("systemuser_defaultmailbox_mailbox", this.systemuser_defaultmailbox_mailbox);
        writer.writeDateValue("tagemailsafter", this.tagemailsafter);
        writer.writeNumberValue("testemailconfigurationretrycount", this.testemailconfigurationretrycount);
        writer.writeBooleanValue("testemailconfigurationscheduled", this.testemailconfigurationscheduled);
        writer.writeDateValue("testmailboxaccesscompletedon", this.testmailboxaccesscompletedon);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeCollectionOfObjectValues<Tracelog>("tracelog_Mailbox", this.tracelog_Mailbox);
        writer.writeNumberValue("transientfailurecount", this.transientfailurecount);
        writer.writeStringValue("undeliverablefolder", this.undeliverablefolder);
        writer.writeStringValue("username", this.username);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("verboseloggingenabled", this.verboseloggingenabled);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the serviceappointment_mailbox_sendermailboxid property value. 
     * @returns a serviceappointment
     */
    public get serviceappointment_mailbox_sendermailboxid() {
        return this._serviceappointment_mailbox_sendermailboxid;
    };
    /**
     * Sets the serviceappointment_mailbox_sendermailboxid property value. 
     * @param value Value to set for the serviceappointment_mailbox_sendermailboxid property.
     */
    public set serviceappointment_mailbox_sendermailboxid(value: Serviceappointment[] | undefined) {
        this._serviceappointment_mailbox_sendermailboxid = value;
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
     * Gets the systemuser_defaultmailbox_mailbox property value. 
     * @returns a systemuser
     */
    public get systemuser_defaultmailbox_mailbox() {
        return this._systemuser_defaultmailbox_mailbox;
    };
    /**
     * Sets the systemuser_defaultmailbox_mailbox property value. 
     * @param value Value to set for the systemuser_defaultmailbox_mailbox property.
     */
    public set systemuser_defaultmailbox_mailbox(value: Systemuser[] | undefined) {
        this._systemuser_defaultmailbox_mailbox = value;
    };
    /**
     * Gets the tagemailsafter property value. 
     * @returns a Date
     */
    public get tagemailsafter() {
        return this._tagemailsafter;
    };
    /**
     * Sets the tagemailsafter property value. 
     * @param value Value to set for the tagemailsafter property.
     */
    public set tagemailsafter(value: Date | undefined) {
        this._tagemailsafter = value;
    };
    /**
     * Gets the testemailconfigurationretrycount property value. 
     * @returns a integer
     */
    public get testemailconfigurationretrycount() {
        return this._testemailconfigurationretrycount;
    };
    /**
     * Sets the testemailconfigurationretrycount property value. 
     * @param value Value to set for the testemailconfigurationretrycount property.
     */
    public set testemailconfigurationretrycount(value: number | undefined) {
        this._testemailconfigurationretrycount = value;
    };
    /**
     * Gets the testemailconfigurationscheduled property value. 
     * @returns a boolean
     */
    public get testemailconfigurationscheduled() {
        return this._testemailconfigurationscheduled;
    };
    /**
     * Sets the testemailconfigurationscheduled property value. 
     * @param value Value to set for the testemailconfigurationscheduled property.
     */
    public set testemailconfigurationscheduled(value: boolean | undefined) {
        this._testemailconfigurationscheduled = value;
    };
    /**
     * Gets the testmailboxaccesscompletedon property value. 
     * @returns a Date
     */
    public get testmailboxaccesscompletedon() {
        return this._testmailboxaccesscompletedon;
    };
    /**
     * Sets the testmailboxaccesscompletedon property value. 
     * @param value Value to set for the testmailboxaccesscompletedon property.
     */
    public set testmailboxaccesscompletedon(value: Date | undefined) {
        this._testmailboxaccesscompletedon = value;
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
     * Gets the tracelog_Mailbox property value. 
     * @returns a tracelog
     */
    public get tracelog_Mailbox() {
        return this._tracelog_Mailbox;
    };
    /**
     * Sets the tracelog_Mailbox property value. 
     * @param value Value to set for the tracelog_Mailbox property.
     */
    public set tracelog_Mailbox(value: Tracelog[] | undefined) {
        this._tracelog_Mailbox = value;
    };
    /**
     * Gets the transientfailurecount property value. 
     * @returns a integer
     */
    public get transientfailurecount() {
        return this._transientfailurecount;
    };
    /**
     * Sets the transientfailurecount property value. 
     * @param value Value to set for the transientfailurecount property.
     */
    public set transientfailurecount(value: number | undefined) {
        this._transientfailurecount = value;
    };
    /**
     * Gets the undeliverablefolder property value. 
     * @returns a string
     */
    public get undeliverablefolder() {
        return this._undeliverablefolder;
    };
    /**
     * Sets the undeliverablefolder property value. 
     * @param value Value to set for the undeliverablefolder property.
     */
    public set undeliverablefolder(value: string | undefined) {
        this._undeliverablefolder = value;
    };
    /**
     * Gets the username property value. 
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. 
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
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
     * Gets the verboseloggingenabled property value. 
     * @returns a integer
     */
    public get verboseloggingenabled() {
        return this._verboseloggingenabled;
    };
    /**
     * Sets the verboseloggingenabled property value. 
     * @param value Value to set for the verboseloggingenabled property.
     */
    public set verboseloggingenabled(value: number | undefined) {
        this._verboseloggingenabled = value;
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
