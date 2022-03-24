import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createMailboxFromDiscriminatorValue} from './createMailboxFromDiscriminatorValue';
import {createMsdyn_assignmentconfigurationFromDiscriminatorValue} from './createMsdyn_assignmentconfigurationFromDiscriminatorValue';
import {createMsdyn_decisioncontractFromDiscriminatorValue} from './createMsdyn_decisioncontractFromDiscriminatorValue';
import {createMsdyn_liveconversationFromDiscriminatorValue} from './createMsdyn_liveconversationFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemFromDiscriminatorValue} from './createMsdyn_ocliveworkitemFromDiscriminatorValue';
import {createMsdyn_ocruleitemFromDiscriminatorValue} from './createMsdyn_ocruleitemFromDiscriminatorValue';
import {createMsdyn_ocsessionFromDiscriminatorValue} from './createMsdyn_ocsessionFromDiscriminatorValue';
import {createMsdyn_operatinghourFromDiscriminatorValue} from './createMsdyn_operatinghourFromDiscriminatorValue';
import {createMsdyn_rulesetdependencymappingFromDiscriminatorValue} from './createMsdyn_rulesetdependencymappingFromDiscriminatorValue';
import {createMsdyn_unifiedroutingrunFromDiscriminatorValue} from './createMsdyn_unifiedroutingrunFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPostfollowFromDiscriminatorValue} from './createPostfollowFromDiscriminatorValue';
import {createPostregardingFromDiscriminatorValue} from './createPostregardingFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Activityparty, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Email, Mailbox, Msdyn_assignmentconfiguration, Msdyn_decisioncontract, Msdyn_liveconversation, Msdyn_liveworkstream, Msdyn_ocliveworkitem, Msdyn_ocruleitem, Msdyn_ocsession, Msdyn_operatinghour, Msdyn_rulesetdependencymapping, Msdyn_unifiedroutingrun, Organization, Postfollow, Postregarding, Principal, Principalobjectattributeaccess, Processsession, Queueitem, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Queue extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __defaultmailbox_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_assignmentinputcontractid_value?: string | undefined;
    private __msdyn_operatinghourid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _businessunitid?: Businessunit | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _defaultmailbox?: Mailbox | undefined;
    private _description?: string | undefined;
    private _email_acceptingentity_queue?: Email[] | undefined;
    private _emailaddress?: string | undefined;
    private _emailrouteraccessapproval?: number | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _ignoreunsolicitedemail?: boolean | undefined;
    private _importsequencenumber?: number | undefined;
    private _incomingemaildeliverymethod?: number | undefined;
    private _incomingemailfilteringmethod?: number | undefined;
    private _isemailaddressapprovedbyo365admin?: boolean | undefined;
    private _mailbox_regarding_queue?: Mailbox[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_assignmentstrategy?: number | undefined;
    private _msdyn_isdefaultqueue?: boolean | undefined;
    private _msdyn_isomnichannelqueue?: boolean | undefined;
    private _msdyn_maxqueuesize?: number | undefined;
    private _msdyn_operatinghourid?: Msdyn_operatinghour | undefined;
    private _msdyn_priority?: number | undefined;
    private _msdyn_queue_msdyn_assignmentconfiguration_queueid?: Msdyn_assignmentconfiguration[] | undefined;
    private _msdyn_queue_msdyn_liveconversation?: Msdyn_liveconversation[] | undefined;
    private _msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue?: Msdyn_liveworkstream[] | undefined;
    private _msdyn_queue_msdyn_liveworkstream_queueid?: Msdyn_liveworkstream[] | undefined;
    private _msdyn_queue_msdyn_ocliveworkitem_queueid?: Msdyn_ocliveworkitem[] | undefined;
    private _msdyn_queue_msdyn_ocsession_queueid?: Msdyn_ocsession[] | undefined;
    private _msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: Msdyn_rulesetdependencymapping[] | undefined;
    private _msdyn_queue_msdyn_unifiedroutingrun_queue?: Msdyn_unifiedroutingrun[] | undefined;
    private _msdyn_queue_ocruleitem?: Msdyn_ocruleitem[] | undefined;
    private _msdyn_queuetype?: number | undefined;
    private _msdyn_routingcontractid?: Msdyn_decisioncontract | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _name?: string | undefined;
    private _numberofitems?: number | undefined;
    private _numberofmembers?: number | undefined;
    private _organizationid?: Organization | undefined;
    private _outgoingemaildeliverymethod?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _primaryuserid?: Systemuser | undefined;
    private _queue_activity_parties?: Activityparty[] | undefined;
    private _queue_AsyncOperations?: Asyncoperation[] | undefined;
    private _queue_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _queue_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _queue_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _queue_Email_EmailSender?: Email[] | undefined;
    private _queue_entries?: Queueitem[] | undefined;
    private _queue_PostFollows?: Postfollow[] | undefined;
    private _queue_PostRegardings?: Postregarding[] | undefined;
    private _queue_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _queue_ProcessSessions?: Processsession[] | undefined;
    private _queue_SyncErrors?: Syncerror[] | undefined;
    private _queue_system_user?: Systemuser[] | undefined;
    private _queue_team?: Team[] | undefined;
    private _queueid?: string | undefined;
    private _queuemembership_association?: Systemuser[] | undefined;
    private _queuetypecode?: number | undefined;
    private _queueviewtype?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _defaultmailbox_value property value. 
     * @returns a string
     */
    public get _defaultmailbox_value() {
        return this.__defaultmailbox_value;
    };
    /**
     * Sets the _defaultmailbox_value property value. 
     * @param value Value to set for the _defaultmailbox_value property.
     */
    public set _defaultmailbox_value(value: string | undefined) {
        this.__defaultmailbox_value = value;
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
     * Gets the _msdyn_assignmentinputcontractid_value property value. 
     * @returns a string
     */
    public get _msdyn_assignmentinputcontractid_value() {
        return this.__msdyn_assignmentinputcontractid_value;
    };
    /**
     * Sets the _msdyn_assignmentinputcontractid_value property value. 
     * @param value Value to set for the _msdyn_assignmentinputcontractid_value property.
     */
    public set _msdyn_assignmentinputcontractid_value(value: string | undefined) {
        this.__msdyn_assignmentinputcontractid_value = value;
    };
    /**
     * Gets the _msdyn_operatinghourid_value property value. 
     * @returns a string
     */
    public get _msdyn_operatinghourid_value() {
        return this.__msdyn_operatinghourid_value;
    };
    /**
     * Sets the _msdyn_operatinghourid_value property value. 
     * @param value Value to set for the _msdyn_operatinghourid_value property.
     */
    public set _msdyn_operatinghourid_value(value: string | undefined) {
        this.__msdyn_operatinghourid_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the businessunitid property value. 
     * @returns a businessunit
     */
    public get businessunitid() {
        return this._businessunitid;
    };
    /**
     * Sets the businessunitid property value. 
     * @param value Value to set for the businessunitid property.
     */
    public set businessunitid(value: Businessunit | undefined) {
        this._businessunitid = value;
    };
    /**
     * Instantiates a new queue and sets the default values.
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
     * Gets the defaultmailbox property value. 
     * @returns a mailbox
     */
    public get defaultmailbox() {
        return this._defaultmailbox;
    };
    /**
     * Sets the defaultmailbox property value. 
     * @param value Value to set for the defaultmailbox property.
     */
    public set defaultmailbox(value: Mailbox | undefined) {
        this._defaultmailbox = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the email_acceptingentity_queue property value. 
     * @returns a email
     */
    public get email_acceptingentity_queue() {
        return this._email_acceptingentity_queue;
    };
    /**
     * Sets the email_acceptingentity_queue property value. 
     * @param value Value to set for the email_acceptingentity_queue property.
     */
    public set email_acceptingentity_queue(value: Email[] | undefined) {
        this._email_acceptingentity_queue = value;
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Queue)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Queue)._createdonbehalfby_value = n.getStringValue(); },
            "_defaultmailbox_value": (o, n) => { (o as unknown as Queue)._defaultmailbox_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Queue)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Queue)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_assignmentinputcontractid_value": (o, n) => { (o as unknown as Queue)._msdyn_assignmentinputcontractid_value = n.getStringValue(); },
            "_msdyn_operatinghourid_value": (o, n) => { (o as unknown as Queue)._msdyn_operatinghourid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Queue)._organizationid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Queue)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Queue)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Queue)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Queue)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Queue)._transactioncurrencyid_value = n.getStringValue(); },
            "businessunitid": (o, n) => { (o as unknown as Queue).businessunitid = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "createdby": (o, n) => { (o as unknown as Queue).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Queue).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Queue).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "defaultmailbox": (o, n) => { (o as unknown as Queue).defaultmailbox = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Queue).description = n.getStringValue(); },
            "email_acceptingentity_queue": (o, n) => { (o as unknown as Queue).email_acceptingentity_queue = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "emailaddress": (o, n) => { (o as unknown as Queue).emailaddress = n.getStringValue(); },
            "emailrouteraccessapproval": (o, n) => { (o as unknown as Queue).emailrouteraccessapproval = n.getNumberValue(); },
            "entityimage": (o, n) => { (o as unknown as Queue).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Queue).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Queue).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Queue).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Queue).exchangerate = n.getNumberValue(); },
            "ignoreunsolicitedemail": (o, n) => { (o as unknown as Queue).ignoreunsolicitedemail = n.getBooleanValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Queue).importsequencenumber = n.getNumberValue(); },
            "incomingemaildeliverymethod": (o, n) => { (o as unknown as Queue).incomingemaildeliverymethod = n.getNumberValue(); },
            "incomingemailfilteringmethod": (o, n) => { (o as unknown as Queue).incomingemailfilteringmethod = n.getNumberValue(); },
            "isemailaddressapprovedbyo365admin": (o, n) => { (o as unknown as Queue).isemailaddressapprovedbyo365admin = n.getBooleanValue(); },
            "mailbox_regarding_queue": (o, n) => { (o as unknown as Queue).mailbox_regarding_queue = n.getCollectionOfObjectValues<Mailbox>(createMailboxFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Queue).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Queue).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Queue).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_assignmentstrategy": (o, n) => { (o as unknown as Queue).msdyn_assignmentstrategy = n.getNumberValue(); },
            "msdyn_isdefaultqueue": (o, n) => { (o as unknown as Queue).msdyn_isdefaultqueue = n.getBooleanValue(); },
            "msdyn_isomnichannelqueue": (o, n) => { (o as unknown as Queue).msdyn_isomnichannelqueue = n.getBooleanValue(); },
            "msdyn_maxqueuesize": (o, n) => { (o as unknown as Queue).msdyn_maxqueuesize = n.getNumberValue(); },
            "msdyn_operatinghourid": (o, n) => { (o as unknown as Queue).msdyn_operatinghourid = n.getObjectValue<Msdyn_operatinghour>(createMsdyn_operatinghourFromDiscriminatorValue); },
            "msdyn_priority": (o, n) => { (o as unknown as Queue).msdyn_priority = n.getNumberValue(); },
            "msdyn_queue_msdyn_assignmentconfiguration_queueid": (o, n) => { (o as unknown as Queue).msdyn_queue_msdyn_assignmentconfiguration_queueid = n.getCollectionOfObjectValues<Msdyn_assignmentconfiguration>(createMsdyn_assignmentconfigurationFromDiscriminatorValue); },
            "msdyn_queue_msdyn_liveconversation": (o, n) => { (o as unknown as Queue).msdyn_queue_msdyn_liveconversation = n.getCollectionOfObjectValues<Msdyn_liveconversation>(createMsdyn_liveconversationFromDiscriminatorValue); },
            "msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue": (o, n) => { (o as unknown as Queue).msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue = n.getCollectionOfObjectValues<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_queue_msdyn_liveworkstream_queueid": (o, n) => { (o as unknown as Queue).msdyn_queue_msdyn_liveworkstream_queueid = n.getCollectionOfObjectValues<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_queue_msdyn_ocliveworkitem_queueid": (o, n) => { (o as unknown as Queue).msdyn_queue_msdyn_ocliveworkitem_queueid = n.getCollectionOfObjectValues<Msdyn_ocliveworkitem>(createMsdyn_ocliveworkitemFromDiscriminatorValue); },
            "msdyn_queue_msdyn_ocsession_queueid": (o, n) => { (o as unknown as Queue).msdyn_queue_msdyn_ocsession_queueid = n.getCollectionOfObjectValues<Msdyn_ocsession>(createMsdyn_ocsessionFromDiscriminatorValue); },
            "msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid": (o, n) => { (o as unknown as Queue).msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = n.getCollectionOfObjectValues<Msdyn_rulesetdependencymapping>(createMsdyn_rulesetdependencymappingFromDiscriminatorValue); },
            "msdyn_queue_msdyn_unifiedroutingrun_queue": (o, n) => { (o as unknown as Queue).msdyn_queue_msdyn_unifiedroutingrun_queue = n.getCollectionOfObjectValues<Msdyn_unifiedroutingrun>(createMsdyn_unifiedroutingrunFromDiscriminatorValue); },
            "msdyn_queue_ocruleitem": (o, n) => { (o as unknown as Queue).msdyn_queue_ocruleitem = n.getCollectionOfObjectValues<Msdyn_ocruleitem>(createMsdyn_ocruleitemFromDiscriminatorValue); },
            "msdyn_queuetype": (o, n) => { (o as unknown as Queue).msdyn_queuetype = n.getNumberValue(); },
            "msdyn_routingcontractid": (o, n) => { (o as unknown as Queue).msdyn_routingcontractid = n.getObjectValue<Msdyn_decisioncontract>(createMsdyn_decisioncontractFromDiscriminatorValue); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Queue).msdyn_uniquename = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Queue).name = n.getStringValue(); },
            "numberofitems": (o, n) => { (o as unknown as Queue).numberofitems = n.getNumberValue(); },
            "numberofmembers": (o, n) => { (o as unknown as Queue).numberofmembers = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Queue).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "outgoingemaildeliverymethod": (o, n) => { (o as unknown as Queue).outgoingemaildeliverymethod = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Queue).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Queue).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Queue).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "primaryuserid": (o, n) => { (o as unknown as Queue).primaryuserid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "queue_activity_parties": (o, n) => { (o as unknown as Queue).queue_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "queue_AsyncOperations": (o, n) => { (o as unknown as Queue).queue_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "queue_BulkDeleteFailures": (o, n) => { (o as unknown as Queue).queue_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "queue_DuplicateBaseRecord": (o, n) => { (o as unknown as Queue).queue_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "queue_DuplicateMatchingRecord": (o, n) => { (o as unknown as Queue).queue_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "queue_Email_EmailSender": (o, n) => { (o as unknown as Queue).queue_Email_EmailSender = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "queue_entries": (o, n) => { (o as unknown as Queue).queue_entries = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "queue_PostFollows": (o, n) => { (o as unknown as Queue).queue_PostFollows = n.getCollectionOfObjectValues<Postfollow>(createPostfollowFromDiscriminatorValue); },
            "queue_PostRegardings": (o, n) => { (o as unknown as Queue).queue_PostRegardings = n.getCollectionOfObjectValues<Postregarding>(createPostregardingFromDiscriminatorValue); },
            "queue_principalobjectattributeaccess": (o, n) => { (o as unknown as Queue).queue_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "queue_ProcessSessions": (o, n) => { (o as unknown as Queue).queue_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "queue_SyncErrors": (o, n) => { (o as unknown as Queue).queue_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "queue_system_user": (o, n) => { (o as unknown as Queue).queue_system_user = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "queue_team": (o, n) => { (o as unknown as Queue).queue_team = n.getCollectionOfObjectValues<Team>(createTeamFromDiscriminatorValue); },
            "queueid": (o, n) => { (o as unknown as Queue).queueid = n.getStringValue(); },
            "queuemembership_association": (o, n) => { (o as unknown as Queue).queuemembership_association = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "queuetypecode": (o, n) => { (o as unknown as Queue).queuetypecode = n.getNumberValue(); },
            "queueviewtype": (o, n) => { (o as unknown as Queue).queueviewtype = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Queue).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Queue).statuscode = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Queue).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Queue).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ignoreunsolicitedemail property value. 
     * @returns a boolean
     */
    public get ignoreunsolicitedemail() {
        return this._ignoreunsolicitedemail;
    };
    /**
     * Sets the ignoreunsolicitedemail property value. 
     * @param value Value to set for the ignoreunsolicitedemail property.
     */
    public set ignoreunsolicitedemail(value: boolean | undefined) {
        this._ignoreunsolicitedemail = value;
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
     * Gets the incomingemailfilteringmethod property value. 
     * @returns a integer
     */
    public get incomingemailfilteringmethod() {
        return this._incomingemailfilteringmethod;
    };
    /**
     * Sets the incomingemailfilteringmethod property value. 
     * @param value Value to set for the incomingemailfilteringmethod property.
     */
    public set incomingemailfilteringmethod(value: number | undefined) {
        this._incomingemailfilteringmethod = value;
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
     * Gets the mailbox_regarding_queue property value. 
     * @returns a mailbox
     */
    public get mailbox_regarding_queue() {
        return this._mailbox_regarding_queue;
    };
    /**
     * Sets the mailbox_regarding_queue property value. 
     * @param value Value to set for the mailbox_regarding_queue property.
     */
    public set mailbox_regarding_queue(value: Mailbox[] | undefined) {
        this._mailbox_regarding_queue = value;
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
     * Gets the msdyn_assignmentstrategy property value. 
     * @returns a integer
     */
    public get msdyn_assignmentstrategy() {
        return this._msdyn_assignmentstrategy;
    };
    /**
     * Sets the msdyn_assignmentstrategy property value. 
     * @param value Value to set for the msdyn_assignmentstrategy property.
     */
    public set msdyn_assignmentstrategy(value: number | undefined) {
        this._msdyn_assignmentstrategy = value;
    };
    /**
     * Gets the msdyn_isdefaultqueue property value. 
     * @returns a boolean
     */
    public get msdyn_isdefaultqueue() {
        return this._msdyn_isdefaultqueue;
    };
    /**
     * Sets the msdyn_isdefaultqueue property value. 
     * @param value Value to set for the msdyn_isdefaultqueue property.
     */
    public set msdyn_isdefaultqueue(value: boolean | undefined) {
        this._msdyn_isdefaultqueue = value;
    };
    /**
     * Gets the msdyn_isomnichannelqueue property value. 
     * @returns a boolean
     */
    public get msdyn_isomnichannelqueue() {
        return this._msdyn_isomnichannelqueue;
    };
    /**
     * Sets the msdyn_isomnichannelqueue property value. 
     * @param value Value to set for the msdyn_isomnichannelqueue property.
     */
    public set msdyn_isomnichannelqueue(value: boolean | undefined) {
        this._msdyn_isomnichannelqueue = value;
    };
    /**
     * Gets the msdyn_maxqueuesize property value. 
     * @returns a integer
     */
    public get msdyn_maxqueuesize() {
        return this._msdyn_maxqueuesize;
    };
    /**
     * Sets the msdyn_maxqueuesize property value. 
     * @param value Value to set for the msdyn_maxqueuesize property.
     */
    public set msdyn_maxqueuesize(value: number | undefined) {
        this._msdyn_maxqueuesize = value;
    };
    /**
     * Gets the msdyn_operatinghourid property value. 
     * @returns a msdyn_operatinghour
     */
    public get msdyn_operatinghourid() {
        return this._msdyn_operatinghourid;
    };
    /**
     * Sets the msdyn_operatinghourid property value. 
     * @param value Value to set for the msdyn_operatinghourid property.
     */
    public set msdyn_operatinghourid(value: Msdyn_operatinghour | undefined) {
        this._msdyn_operatinghourid = value;
    };
    /**
     * Gets the msdyn_priority property value. 
     * @returns a integer
     */
    public get msdyn_priority() {
        return this._msdyn_priority;
    };
    /**
     * Sets the msdyn_priority property value. 
     * @param value Value to set for the msdyn_priority property.
     */
    public set msdyn_priority(value: number | undefined) {
        this._msdyn_priority = value;
    };
    /**
     * Gets the msdyn_queue_msdyn_assignmentconfiguration_queueid property value. 
     * @returns a msdyn_assignmentconfiguration
     */
    public get msdyn_queue_msdyn_assignmentconfiguration_queueid() {
        return this._msdyn_queue_msdyn_assignmentconfiguration_queueid;
    };
    /**
     * Sets the msdyn_queue_msdyn_assignmentconfiguration_queueid property value. 
     * @param value Value to set for the msdyn_queue_msdyn_assignmentconfiguration_queueid property.
     */
    public set msdyn_queue_msdyn_assignmentconfiguration_queueid(value: Msdyn_assignmentconfiguration[] | undefined) {
        this._msdyn_queue_msdyn_assignmentconfiguration_queueid = value;
    };
    /**
     * Gets the msdyn_queue_msdyn_liveconversation property value. 
     * @returns a msdyn_liveconversation
     */
    public get msdyn_queue_msdyn_liveconversation() {
        return this._msdyn_queue_msdyn_liveconversation;
    };
    /**
     * Sets the msdyn_queue_msdyn_liveconversation property value. 
     * @param value Value to set for the msdyn_queue_msdyn_liveconversation property.
     */
    public set msdyn_queue_msdyn_liveconversation(value: Msdyn_liveconversation[] | undefined) {
        this._msdyn_queue_msdyn_liveconversation = value;
    };
    /**
     * Gets the msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue() {
        return this._msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue;
    };
    /**
     * Sets the msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue property value. 
     * @param value Value to set for the msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue property.
     */
    public set msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue(value: Msdyn_liveworkstream[] | undefined) {
        this._msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue = value;
    };
    /**
     * Gets the msdyn_queue_msdyn_liveworkstream_queueid property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_queue_msdyn_liveworkstream_queueid() {
        return this._msdyn_queue_msdyn_liveworkstream_queueid;
    };
    /**
     * Sets the msdyn_queue_msdyn_liveworkstream_queueid property value. 
     * @param value Value to set for the msdyn_queue_msdyn_liveworkstream_queueid property.
     */
    public set msdyn_queue_msdyn_liveworkstream_queueid(value: Msdyn_liveworkstream[] | undefined) {
        this._msdyn_queue_msdyn_liveworkstream_queueid = value;
    };
    /**
     * Gets the msdyn_queue_msdyn_ocliveworkitem_queueid property value. 
     * @returns a msdyn_ocliveworkitem
     */
    public get msdyn_queue_msdyn_ocliveworkitem_queueid() {
        return this._msdyn_queue_msdyn_ocliveworkitem_queueid;
    };
    /**
     * Sets the msdyn_queue_msdyn_ocliveworkitem_queueid property value. 
     * @param value Value to set for the msdyn_queue_msdyn_ocliveworkitem_queueid property.
     */
    public set msdyn_queue_msdyn_ocliveworkitem_queueid(value: Msdyn_ocliveworkitem[] | undefined) {
        this._msdyn_queue_msdyn_ocliveworkitem_queueid = value;
    };
    /**
     * Gets the msdyn_queue_msdyn_ocsession_queueid property value. 
     * @returns a msdyn_ocsession
     */
    public get msdyn_queue_msdyn_ocsession_queueid() {
        return this._msdyn_queue_msdyn_ocsession_queueid;
    };
    /**
     * Sets the msdyn_queue_msdyn_ocsession_queueid property value. 
     * @param value Value to set for the msdyn_queue_msdyn_ocsession_queueid property.
     */
    public set msdyn_queue_msdyn_ocsession_queueid(value: Msdyn_ocsession[] | undefined) {
        this._msdyn_queue_msdyn_ocsession_queueid = value;
    };
    /**
     * Gets the msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @returns a msdyn_rulesetdependencymapping
     */
    public get msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid() {
        return this._msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid;
    };
    /**
     * Sets the msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @param value Value to set for the msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property.
     */
    public set msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid(value: Msdyn_rulesetdependencymapping[] | undefined) {
        this._msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = value;
    };
    /**
     * Gets the msdyn_queue_msdyn_unifiedroutingrun_queue property value. 
     * @returns a msdyn_unifiedroutingrun
     */
    public get msdyn_queue_msdyn_unifiedroutingrun_queue() {
        return this._msdyn_queue_msdyn_unifiedroutingrun_queue;
    };
    /**
     * Sets the msdyn_queue_msdyn_unifiedroutingrun_queue property value. 
     * @param value Value to set for the msdyn_queue_msdyn_unifiedroutingrun_queue property.
     */
    public set msdyn_queue_msdyn_unifiedroutingrun_queue(value: Msdyn_unifiedroutingrun[] | undefined) {
        this._msdyn_queue_msdyn_unifiedroutingrun_queue = value;
    };
    /**
     * Gets the msdyn_queue_ocruleitem property value. 
     * @returns a msdyn_ocruleitem
     */
    public get msdyn_queue_ocruleitem() {
        return this._msdyn_queue_ocruleitem;
    };
    /**
     * Sets the msdyn_queue_ocruleitem property value. 
     * @param value Value to set for the msdyn_queue_ocruleitem property.
     */
    public set msdyn_queue_ocruleitem(value: Msdyn_ocruleitem[] | undefined) {
        this._msdyn_queue_ocruleitem = value;
    };
    /**
     * Gets the msdyn_queuetype property value. 
     * @returns a integer
     */
    public get msdyn_queuetype() {
        return this._msdyn_queuetype;
    };
    /**
     * Sets the msdyn_queuetype property value. 
     * @param value Value to set for the msdyn_queuetype property.
     */
    public set msdyn_queuetype(value: number | undefined) {
        this._msdyn_queuetype = value;
    };
    /**
     * Gets the msdyn_routingcontractid property value. 
     * @returns a msdyn_decisioncontract
     */
    public get msdyn_routingcontractid() {
        return this._msdyn_routingcontractid;
    };
    /**
     * Sets the msdyn_routingcontractid property value. 
     * @param value Value to set for the msdyn_routingcontractid property.
     */
    public set msdyn_routingcontractid(value: Msdyn_decisioncontract | undefined) {
        this._msdyn_routingcontractid = value;
    };
    /**
     * Gets the msdyn_uniquename property value. 
     * @returns a string
     */
    public get msdyn_uniquename() {
        return this._msdyn_uniquename;
    };
    /**
     * Sets the msdyn_uniquename property value. 
     * @param value Value to set for the msdyn_uniquename property.
     */
    public set msdyn_uniquename(value: string | undefined) {
        this._msdyn_uniquename = value;
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
     * Gets the numberofitems property value. 
     * @returns a integer
     */
    public get numberofitems() {
        return this._numberofitems;
    };
    /**
     * Sets the numberofitems property value. 
     * @param value Value to set for the numberofitems property.
     */
    public set numberofitems(value: number | undefined) {
        this._numberofitems = value;
    };
    /**
     * Gets the numberofmembers property value. 
     * @returns a integer
     */
    public get numberofmembers() {
        return this._numberofmembers;
    };
    /**
     * Sets the numberofmembers property value. 
     * @param value Value to set for the numberofmembers property.
     */
    public set numberofmembers(value: number | undefined) {
        this._numberofmembers = value;
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
     * Gets the primaryuserid property value. 
     * @returns a systemuser
     */
    public get primaryuserid() {
        return this._primaryuserid;
    };
    /**
     * Sets the primaryuserid property value. 
     * @param value Value to set for the primaryuserid property.
     */
    public set primaryuserid(value: Systemuser | undefined) {
        this._primaryuserid = value;
    };
    /**
     * Gets the queue_activity_parties property value. 
     * @returns a activityparty
     */
    public get queue_activity_parties() {
        return this._queue_activity_parties;
    };
    /**
     * Sets the queue_activity_parties property value. 
     * @param value Value to set for the queue_activity_parties property.
     */
    public set queue_activity_parties(value: Activityparty[] | undefined) {
        this._queue_activity_parties = value;
    };
    /**
     * Gets the queue_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get queue_AsyncOperations() {
        return this._queue_AsyncOperations;
    };
    /**
     * Sets the queue_AsyncOperations property value. 
     * @param value Value to set for the Queue_AsyncOperations property.
     */
    public set queue_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._queue_AsyncOperations = value;
    };
    /**
     * Gets the queue_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get queue_BulkDeleteFailures() {
        return this._queue_BulkDeleteFailures;
    };
    /**
     * Sets the queue_BulkDeleteFailures property value. 
     * @param value Value to set for the Queue_BulkDeleteFailures property.
     */
    public set queue_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._queue_BulkDeleteFailures = value;
    };
    /**
     * Gets the queue_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get queue_DuplicateBaseRecord() {
        return this._queue_DuplicateBaseRecord;
    };
    /**
     * Sets the queue_DuplicateBaseRecord property value. 
     * @param value Value to set for the Queue_DuplicateBaseRecord property.
     */
    public set queue_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._queue_DuplicateBaseRecord = value;
    };
    /**
     * Gets the queue_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get queue_DuplicateMatchingRecord() {
        return this._queue_DuplicateMatchingRecord;
    };
    /**
     * Sets the queue_DuplicateMatchingRecord property value. 
     * @param value Value to set for the Queue_DuplicateMatchingRecord property.
     */
    public set queue_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._queue_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the queue_Email_EmailSender property value. 
     * @returns a email
     */
    public get queue_Email_EmailSender() {
        return this._queue_Email_EmailSender;
    };
    /**
     * Sets the queue_Email_EmailSender property value. 
     * @param value Value to set for the Queue_Email_EmailSender property.
     */
    public set queue_Email_EmailSender(value: Email[] | undefined) {
        this._queue_Email_EmailSender = value;
    };
    /**
     * Gets the queue_entries property value. 
     * @returns a queueitem
     */
    public get queue_entries() {
        return this._queue_entries;
    };
    /**
     * Sets the queue_entries property value. 
     * @param value Value to set for the queue_entries property.
     */
    public set queue_entries(value: Queueitem[] | undefined) {
        this._queue_entries = value;
    };
    /**
     * Gets the queue_PostFollows property value. 
     * @returns a postfollow
     */
    public get queue_PostFollows() {
        return this._queue_PostFollows;
    };
    /**
     * Sets the queue_PostFollows property value. 
     * @param value Value to set for the queue_PostFollows property.
     */
    public set queue_PostFollows(value: Postfollow[] | undefined) {
        this._queue_PostFollows = value;
    };
    /**
     * Gets the queue_PostRegardings property value. 
     * @returns a postregarding
     */
    public get queue_PostRegardings() {
        return this._queue_PostRegardings;
    };
    /**
     * Sets the queue_PostRegardings property value. 
     * @param value Value to set for the queue_PostRegardings property.
     */
    public set queue_PostRegardings(value: Postregarding[] | undefined) {
        this._queue_PostRegardings = value;
    };
    /**
     * Gets the queue_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get queue_principalobjectattributeaccess() {
        return this._queue_principalobjectattributeaccess;
    };
    /**
     * Sets the queue_principalobjectattributeaccess property value. 
     * @param value Value to set for the queue_principalobjectattributeaccess property.
     */
    public set queue_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._queue_principalobjectattributeaccess = value;
    };
    /**
     * Gets the queue_ProcessSessions property value. 
     * @returns a processsession
     */
    public get queue_ProcessSessions() {
        return this._queue_ProcessSessions;
    };
    /**
     * Sets the queue_ProcessSessions property value. 
     * @param value Value to set for the Queue_ProcessSessions property.
     */
    public set queue_ProcessSessions(value: Processsession[] | undefined) {
        this._queue_ProcessSessions = value;
    };
    /**
     * Gets the queue_SyncErrors property value. 
     * @returns a syncerror
     */
    public get queue_SyncErrors() {
        return this._queue_SyncErrors;
    };
    /**
     * Sets the queue_SyncErrors property value. 
     * @param value Value to set for the Queue_SyncErrors property.
     */
    public set queue_SyncErrors(value: Syncerror[] | undefined) {
        this._queue_SyncErrors = value;
    };
    /**
     * Gets the queue_system_user property value. 
     * @returns a systemuser
     */
    public get queue_system_user() {
        return this._queue_system_user;
    };
    /**
     * Sets the queue_system_user property value. 
     * @param value Value to set for the queue_system_user property.
     */
    public set queue_system_user(value: Systemuser[] | undefined) {
        this._queue_system_user = value;
    };
    /**
     * Gets the queue_team property value. 
     * @returns a team
     */
    public get queue_team() {
        return this._queue_team;
    };
    /**
     * Sets the queue_team property value. 
     * @param value Value to set for the queue_team property.
     */
    public set queue_team(value: Team[] | undefined) {
        this._queue_team = value;
    };
    /**
     * Gets the queueid property value. 
     * @returns a string
     */
    public get queueid() {
        return this._queueid;
    };
    /**
     * Sets the queueid property value. 
     * @param value Value to set for the queueid property.
     */
    public set queueid(value: string | undefined) {
        this._queueid = value;
    };
    /**
     * Gets the queuemembership_association property value. 
     * @returns a systemuser
     */
    public get queuemembership_association() {
        return this._queuemembership_association;
    };
    /**
     * Sets the queuemembership_association property value. 
     * @param value Value to set for the queuemembership_association property.
     */
    public set queuemembership_association(value: Systemuser[] | undefined) {
        this._queuemembership_association = value;
    };
    /**
     * Gets the queuetypecode property value. 
     * @returns a integer
     */
    public get queuetypecode() {
        return this._queuetypecode;
    };
    /**
     * Sets the queuetypecode property value. 
     * @param value Value to set for the queuetypecode property.
     */
    public set queuetypecode(value: number | undefined) {
        this._queuetypecode = value;
    };
    /**
     * Gets the queueviewtype property value. 
     * @returns a integer
     */
    public get queueviewtype() {
        return this._queueviewtype;
    };
    /**
     * Sets the queueviewtype property value. 
     * @param value Value to set for the queueviewtype property.
     */
    public set queueviewtype(value: number | undefined) {
        this._queueviewtype = value;
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
        writer.writeStringValue("_defaultmailbox_value", this._defaultmailbox_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_assignmentinputcontractid_value", this._msdyn_assignmentinputcontractid_value);
        writer.writeStringValue("_msdyn_operatinghourid_value", this._msdyn_operatinghourid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Businessunit>("businessunitid", this.businessunitid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Mailbox>("defaultmailbox", this.defaultmailbox);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<Email>("email_acceptingentity_queue", this.email_acceptingentity_queue);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeNumberValue("emailrouteraccessapproval", this.emailrouteraccessapproval);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeBooleanValue("ignoreunsolicitedemail", this.ignoreunsolicitedemail);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("incomingemaildeliverymethod", this.incomingemaildeliverymethod);
        writer.writeNumberValue("incomingemailfilteringmethod", this.incomingemailfilteringmethod);
        writer.writeBooleanValue("isemailaddressapprovedbyo365admin", this.isemailaddressapprovedbyo365admin);
        writer.writeCollectionOfObjectValues<Mailbox>("mailbox_regarding_queue", this.mailbox_regarding_queue);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_assignmentstrategy", this.msdyn_assignmentstrategy);
        writer.writeBooleanValue("msdyn_isdefaultqueue", this.msdyn_isdefaultqueue);
        writer.writeBooleanValue("msdyn_isomnichannelqueue", this.msdyn_isomnichannelqueue);
        writer.writeNumberValue("msdyn_maxqueuesize", this.msdyn_maxqueuesize);
        writer.writeObjectValue<Msdyn_operatinghour>("msdyn_operatinghourid", this.msdyn_operatinghourid);
        writer.writeNumberValue("msdyn_priority", this.msdyn_priority);
        writer.writeCollectionOfObjectValues<Msdyn_assignmentconfiguration>("msdyn_queue_msdyn_assignmentconfiguration_queueid", this.msdyn_queue_msdyn_assignmentconfiguration_queueid);
        writer.writeCollectionOfObjectValues<Msdyn_liveconversation>("msdyn_queue_msdyn_liveconversation", this.msdyn_queue_msdyn_liveconversation);
        writer.writeCollectionOfObjectValues<Msdyn_liveworkstream>("msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue", this.msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue);
        writer.writeCollectionOfObjectValues<Msdyn_liveworkstream>("msdyn_queue_msdyn_liveworkstream_queueid", this.msdyn_queue_msdyn_liveworkstream_queueid);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitem>("msdyn_queue_msdyn_ocliveworkitem_queueid", this.msdyn_queue_msdyn_ocliveworkitem_queueid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsession>("msdyn_queue_msdyn_ocsession_queueid", this.msdyn_queue_msdyn_ocsession_queueid);
        writer.writeCollectionOfObjectValues<Msdyn_rulesetdependencymapping>("msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid", this.msdyn_queue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid);
        writer.writeCollectionOfObjectValues<Msdyn_unifiedroutingrun>("msdyn_queue_msdyn_unifiedroutingrun_queue", this.msdyn_queue_msdyn_unifiedroutingrun_queue);
        writer.writeCollectionOfObjectValues<Msdyn_ocruleitem>("msdyn_queue_ocruleitem", this.msdyn_queue_ocruleitem);
        writer.writeNumberValue("msdyn_queuetype", this.msdyn_queuetype);
        writer.writeObjectValue<Msdyn_decisioncontract>("msdyn_routingcontractid", this.msdyn_routingcontractid);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("numberofitems", this.numberofitems);
        writer.writeNumberValue("numberofmembers", this.numberofmembers);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeNumberValue("outgoingemaildeliverymethod", this.outgoingemaildeliverymethod);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Systemuser>("primaryuserid", this.primaryuserid);
        writer.writeCollectionOfObjectValues<Activityparty>("queue_activity_parties", this.queue_activity_parties);
        writer.writeCollectionOfObjectValues<Asyncoperation>("queue_AsyncOperations", this.queue_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("queue_BulkDeleteFailures", this.queue_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("queue_DuplicateBaseRecord", this.queue_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("queue_DuplicateMatchingRecord", this.queue_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Email>("queue_Email_EmailSender", this.queue_Email_EmailSender);
        writer.writeCollectionOfObjectValues<Queueitem>("queue_entries", this.queue_entries);
        writer.writeCollectionOfObjectValues<Postfollow>("queue_PostFollows", this.queue_PostFollows);
        writer.writeCollectionOfObjectValues<Postregarding>("queue_PostRegardings", this.queue_PostRegardings);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("queue_principalobjectattributeaccess", this.queue_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("queue_ProcessSessions", this.queue_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("queue_SyncErrors", this.queue_SyncErrors);
        writer.writeCollectionOfObjectValues<Systemuser>("queue_system_user", this.queue_system_user);
        writer.writeCollectionOfObjectValues<Team>("queue_team", this.queue_team);
        writer.writeStringValue("queueid", this.queueid);
        writer.writeCollectionOfObjectValues<Systemuser>("queuemembership_association", this.queuemembership_association);
        writer.writeNumberValue("queuetypecode", this.queuetypecode);
        writer.writeNumberValue("queueviewtype", this.queueviewtype);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
