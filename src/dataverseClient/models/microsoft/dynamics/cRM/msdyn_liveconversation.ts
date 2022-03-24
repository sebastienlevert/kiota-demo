import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createFeedbackFromDiscriminatorValue} from './createFeedbackFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_liveworkstreamFromDiscriminatorValue} from './createMsdyn_liveworkstreamFromDiscriminatorValue';
import {createMsdyn_omnichannelqueueFromDiscriminatorValue} from './createMsdyn_omnichannelqueueFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueFromDiscriminatorValue} from './createQueueFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Connection, Contact, Crmbaseentity, Feedback, Mailboxtrackingfolder, Msdyn_liveworkstream, Msdyn_omnichannelqueue, Principal, Principalobjectattributeaccess, Processsession, Queue, Queueitem, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_liveconversation extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_activeagentid_value?: string | undefined;
    private __msdyn_cdsqueueid_value?: string | undefined;
    private __msdyn_customer_value?: string | undefined;
    private __msdyn_liveworkstreamid_value?: string | undefined;
    private __msdyn_queueid_value?: string | undefined;
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
    private _msdyn_activeagentassignedon?: Date | undefined;
    private _msdyn_activeagentid?: Systemuser | undefined;
    private _msdyn_cdsqueueid?: Queue | undefined;
    private _msdyn_channel?: string | undefined;
    private _msdyn_closedon?: Date | undefined;
    private _msdyn_createdon?: Date | undefined;
    private _msdyn_customer_msdyn_liveconversation_account?: Account | undefined;
    private _msdyn_customer_msdyn_liveconversation_contact?: Contact | undefined;
    private _msdyn_customersentimentlabel?: number | undefined;
    private _msdyn_escalationcount?: number | undefined;
    private _msdyn_initiatedon?: Date | undefined;
    private _msdyn_liveconversation_Annotations?: Annotation[] | undefined;
    private _msdyn_liveconversation_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_liveconversation_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_liveconversation_connections1?: Connection[] | undefined;
    private _msdyn_liveconversation_connections2?: Connection[] | undefined;
    private _msdyn_liveconversation_Feedback?: Feedback[] | undefined;
    private _msdyn_liveconversation_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_liveconversation_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_liveconversation_ProcessSession?: Processsession[] | undefined;
    private _msdyn_liveconversation_QueueItems?: Queueitem[] | undefined;
    private _msdyn_liveconversation_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_liveconversationid?: string | undefined;
    private _msdyn_liveworkstreamid?: Msdyn_liveworkstream | undefined;
    private _msdyn_modifiedon?: Date | undefined;
    private _msdyn_oclastsessionid?: string | undefined;
    private _msdyn_queueid?: Msdyn_omnichannelqueue | undefined;
    private _msdyn_startedon?: Date | undefined;
    private _msdyn_statecode?: number | undefined;
    private _msdyn_statuscode?: number | undefined;
    private _msdyn_statusupdatedon?: Date | undefined;
    private _msdyn_subject?: string | undefined;
    private _msdyn_title?: string | undefined;
    private _msdyn_transfercount?: number | undefined;
    private _msdyn_workstreamworkdistributionmode?: number | undefined;
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
     * Gets the _msdyn_activeagentid_value property value. 
     * @returns a string
     */
    public get _msdyn_activeagentid_value() {
        return this.__msdyn_activeagentid_value;
    };
    /**
     * Sets the _msdyn_activeagentid_value property value. 
     * @param value Value to set for the _msdyn_activeagentid_value property.
     */
    public set _msdyn_activeagentid_value(value: string | undefined) {
        this.__msdyn_activeagentid_value = value;
    };
    /**
     * Gets the _msdyn_cdsqueueid_value property value. 
     * @returns a string
     */
    public get _msdyn_cdsqueueid_value() {
        return this.__msdyn_cdsqueueid_value;
    };
    /**
     * Sets the _msdyn_cdsqueueid_value property value. 
     * @param value Value to set for the _msdyn_cdsqueueid_value property.
     */
    public set _msdyn_cdsqueueid_value(value: string | undefined) {
        this.__msdyn_cdsqueueid_value = value;
    };
    /**
     * Gets the _msdyn_customer_value property value. 
     * @returns a string
     */
    public get _msdyn_customer_value() {
        return this.__msdyn_customer_value;
    };
    /**
     * Sets the _msdyn_customer_value property value. 
     * @param value Value to set for the _msdyn_customer_value property.
     */
    public set _msdyn_customer_value(value: string | undefined) {
        this.__msdyn_customer_value = value;
    };
    /**
     * Gets the _msdyn_liveworkstreamid_value property value. 
     * @returns a string
     */
    public get _msdyn_liveworkstreamid_value() {
        return this.__msdyn_liveworkstreamid_value;
    };
    /**
     * Sets the _msdyn_liveworkstreamid_value property value. 
     * @param value Value to set for the _msdyn_liveworkstreamid_value property.
     */
    public set _msdyn_liveworkstreamid_value(value: string | undefined) {
        this.__msdyn_liveworkstreamid_value = value;
    };
    /**
     * Gets the _msdyn_queueid_value property value. 
     * @returns a string
     */
    public get _msdyn_queueid_value() {
        return this.__msdyn_queueid_value;
    };
    /**
     * Sets the _msdyn_queueid_value property value. 
     * @param value Value to set for the _msdyn_queueid_value property.
     */
    public set _msdyn_queueid_value(value: string | undefined) {
        this.__msdyn_queueid_value = value;
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
     * Instantiates a new msdyn_liveconversation and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_activeagentid_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._msdyn_activeagentid_value = n.getStringValue(); },
            "_msdyn_cdsqueueid_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._msdyn_cdsqueueid_value = n.getStringValue(); },
            "_msdyn_customer_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._msdyn_customer_value = n.getStringValue(); },
            "_msdyn_liveworkstreamid_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._msdyn_liveworkstreamid_value = n.getStringValue(); },
            "_msdyn_queueid_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._msdyn_queueid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_liveconversation)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_liveconversation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_liveconversation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_liveconversation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_liveconversation).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_liveconversation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_liveconversation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_liveconversation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_activeagentassignedon": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_activeagentassignedon = n.getDateValue(); },
            "msdyn_activeagentid": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_activeagentid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_cdsqueueid": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_cdsqueueid = n.getObjectValue<Queue>(createQueueFromDiscriminatorValue); },
            "msdyn_channel": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_channel = n.getStringValue(); },
            "msdyn_closedon": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_closedon = n.getDateValue(); },
            "msdyn_createdon": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_createdon = n.getDateValue(); },
            "msdyn_customer_msdyn_liveconversation_account": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_customer_msdyn_liveconversation_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_customer_msdyn_liveconversation_contact": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_customer_msdyn_liveconversation_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_customersentimentlabel": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_customersentimentlabel = n.getNumberValue(); },
            "msdyn_escalationcount": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_escalationcount = n.getNumberValue(); },
            "msdyn_initiatedon": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_initiatedon = n.getDateValue(); },
            "msdyn_liveconversation_Annotations": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_liveconversation_AsyncOperations": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_liveconversation_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_liveconversation_connections1": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_liveconversation_connections2": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "msdyn_liveconversation_Feedback": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_Feedback = n.getCollectionOfObjectValues<Feedback>(createFeedbackFromDiscriminatorValue); },
            "msdyn_liveconversation_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_liveconversation_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_liveconversation_ProcessSession": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_liveconversation_QueueItems": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_liveconversation_SyncErrors": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversation_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_liveconversationid": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveconversationid = n.getStringValue(); },
            "msdyn_liveworkstreamid": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_liveworkstreamid = n.getObjectValue<Msdyn_liveworkstream>(createMsdyn_liveworkstreamFromDiscriminatorValue); },
            "msdyn_modifiedon": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_modifiedon = n.getDateValue(); },
            "msdyn_oclastsessionid": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_oclastsessionid = n.getStringValue(); },
            "msdyn_queueid": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_queueid = n.getObjectValue<Msdyn_omnichannelqueue>(createMsdyn_omnichannelqueueFromDiscriminatorValue); },
            "msdyn_startedon": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_startedon = n.getDateValue(); },
            "msdyn_statecode": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_statecode = n.getNumberValue(); },
            "msdyn_statuscode": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_statuscode = n.getNumberValue(); },
            "msdyn_statusupdatedon": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_statusupdatedon = n.getDateValue(); },
            "msdyn_subject": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_subject = n.getStringValue(); },
            "msdyn_title": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_title = n.getStringValue(); },
            "msdyn_transfercount": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_transfercount = n.getNumberValue(); },
            "msdyn_workstreamworkdistributionmode": (o, n) => { (o as unknown as Msdyn_liveconversation).msdyn_workstreamworkdistributionmode = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_liveconversation).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_liveconversation).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_liveconversation).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_liveconversation).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_liveconversation).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_liveconversation).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_liveconversation).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_liveconversation).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_liveconversation).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_liveconversation).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_activeagentassignedon property value. 
     * @returns a Date
     */
    public get msdyn_activeagentassignedon() {
        return this._msdyn_activeagentassignedon;
    };
    /**
     * Sets the msdyn_activeagentassignedon property value. 
     * @param value Value to set for the msdyn_activeagentassignedon property.
     */
    public set msdyn_activeagentassignedon(value: Date | undefined) {
        this._msdyn_activeagentassignedon = value;
    };
    /**
     * Gets the msdyn_activeagentid property value. 
     * @returns a systemuser
     */
    public get msdyn_activeagentid() {
        return this._msdyn_activeagentid;
    };
    /**
     * Sets the msdyn_activeagentid property value. 
     * @param value Value to set for the msdyn_activeagentid property.
     */
    public set msdyn_activeagentid(value: Systemuser | undefined) {
        this._msdyn_activeagentid = value;
    };
    /**
     * Gets the msdyn_cdsqueueid property value. 
     * @returns a queue
     */
    public get msdyn_cdsqueueid() {
        return this._msdyn_cdsqueueid;
    };
    /**
     * Sets the msdyn_cdsqueueid property value. 
     * @param value Value to set for the msdyn_cdsqueueid property.
     */
    public set msdyn_cdsqueueid(value: Queue | undefined) {
        this._msdyn_cdsqueueid = value;
    };
    /**
     * Gets the msdyn_channel property value. 
     * @returns a string
     */
    public get msdyn_channel() {
        return this._msdyn_channel;
    };
    /**
     * Sets the msdyn_channel property value. 
     * @param value Value to set for the msdyn_channel property.
     */
    public set msdyn_channel(value: string | undefined) {
        this._msdyn_channel = value;
    };
    /**
     * Gets the msdyn_closedon property value. 
     * @returns a Date
     */
    public get msdyn_closedon() {
        return this._msdyn_closedon;
    };
    /**
     * Sets the msdyn_closedon property value. 
     * @param value Value to set for the msdyn_closedon property.
     */
    public set msdyn_closedon(value: Date | undefined) {
        this._msdyn_closedon = value;
    };
    /**
     * Gets the msdyn_createdon property value. 
     * @returns a Date
     */
    public get msdyn_createdon() {
        return this._msdyn_createdon;
    };
    /**
     * Sets the msdyn_createdon property value. 
     * @param value Value to set for the msdyn_createdon property.
     */
    public set msdyn_createdon(value: Date | undefined) {
        this._msdyn_createdon = value;
    };
    /**
     * Gets the msdyn_customer_msdyn_liveconversation_account property value. 
     * @returns a account
     */
    public get msdyn_customer_msdyn_liveconversation_account() {
        return this._msdyn_customer_msdyn_liveconversation_account;
    };
    /**
     * Sets the msdyn_customer_msdyn_liveconversation_account property value. 
     * @param value Value to set for the msdyn_customer_msdyn_liveconversation_account property.
     */
    public set msdyn_customer_msdyn_liveconversation_account(value: Account | undefined) {
        this._msdyn_customer_msdyn_liveconversation_account = value;
    };
    /**
     * Gets the msdyn_customer_msdyn_liveconversation_contact property value. 
     * @returns a contact
     */
    public get msdyn_customer_msdyn_liveconversation_contact() {
        return this._msdyn_customer_msdyn_liveconversation_contact;
    };
    /**
     * Sets the msdyn_customer_msdyn_liveconversation_contact property value. 
     * @param value Value to set for the msdyn_customer_msdyn_liveconversation_contact property.
     */
    public set msdyn_customer_msdyn_liveconversation_contact(value: Contact | undefined) {
        this._msdyn_customer_msdyn_liveconversation_contact = value;
    };
    /**
     * Gets the msdyn_customersentimentlabel property value. 
     * @returns a integer
     */
    public get msdyn_customersentimentlabel() {
        return this._msdyn_customersentimentlabel;
    };
    /**
     * Sets the msdyn_customersentimentlabel property value. 
     * @param value Value to set for the msdyn_customersentimentlabel property.
     */
    public set msdyn_customersentimentlabel(value: number | undefined) {
        this._msdyn_customersentimentlabel = value;
    };
    /**
     * Gets the msdyn_escalationcount property value. 
     * @returns a integer
     */
    public get msdyn_escalationcount() {
        return this._msdyn_escalationcount;
    };
    /**
     * Sets the msdyn_escalationcount property value. 
     * @param value Value to set for the msdyn_escalationcount property.
     */
    public set msdyn_escalationcount(value: number | undefined) {
        this._msdyn_escalationcount = value;
    };
    /**
     * Gets the msdyn_initiatedon property value. 
     * @returns a Date
     */
    public get msdyn_initiatedon() {
        return this._msdyn_initiatedon;
    };
    /**
     * Sets the msdyn_initiatedon property value. 
     * @param value Value to set for the msdyn_initiatedon property.
     */
    public set msdyn_initiatedon(value: Date | undefined) {
        this._msdyn_initiatedon = value;
    };
    /**
     * Gets the msdyn_liveconversation_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_liveconversation_Annotations() {
        return this._msdyn_liveconversation_Annotations;
    };
    /**
     * Sets the msdyn_liveconversation_Annotations property value. 
     * @param value Value to set for the msdyn_liveconversation_Annotations property.
     */
    public set msdyn_liveconversation_Annotations(value: Annotation[] | undefined) {
        this._msdyn_liveconversation_Annotations = value;
    };
    /**
     * Gets the msdyn_liveconversation_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_liveconversation_AsyncOperations() {
        return this._msdyn_liveconversation_AsyncOperations;
    };
    /**
     * Sets the msdyn_liveconversation_AsyncOperations property value. 
     * @param value Value to set for the msdyn_liveconversation_AsyncOperations property.
     */
    public set msdyn_liveconversation_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_liveconversation_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_liveconversation_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_liveconversation_BulkDeleteFailures() {
        return this._msdyn_liveconversation_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_liveconversation_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_liveconversation_BulkDeleteFailures property.
     */
    public set msdyn_liveconversation_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_liveconversation_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_liveconversation_connections1 property value. 
     * @returns a connection
     */
    public get msdyn_liveconversation_connections1() {
        return this._msdyn_liveconversation_connections1;
    };
    /**
     * Sets the msdyn_liveconversation_connections1 property value. 
     * @param value Value to set for the msdyn_liveconversation_connections1 property.
     */
    public set msdyn_liveconversation_connections1(value: Connection[] | undefined) {
        this._msdyn_liveconversation_connections1 = value;
    };
    /**
     * Gets the msdyn_liveconversation_connections2 property value. 
     * @returns a connection
     */
    public get msdyn_liveconversation_connections2() {
        return this._msdyn_liveconversation_connections2;
    };
    /**
     * Sets the msdyn_liveconversation_connections2 property value. 
     * @param value Value to set for the msdyn_liveconversation_connections2 property.
     */
    public set msdyn_liveconversation_connections2(value: Connection[] | undefined) {
        this._msdyn_liveconversation_connections2 = value;
    };
    /**
     * Gets the msdyn_liveconversation_Feedback property value. 
     * @returns a feedback
     */
    public get msdyn_liveconversation_Feedback() {
        return this._msdyn_liveconversation_Feedback;
    };
    /**
     * Sets the msdyn_liveconversation_Feedback property value. 
     * @param value Value to set for the msdyn_liveconversation_Feedback property.
     */
    public set msdyn_liveconversation_Feedback(value: Feedback[] | undefined) {
        this._msdyn_liveconversation_Feedback = value;
    };
    /**
     * Gets the msdyn_liveconversation_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_liveconversation_MailboxTrackingFolders() {
        return this._msdyn_liveconversation_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_liveconversation_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_liveconversation_MailboxTrackingFolders property.
     */
    public set msdyn_liveconversation_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_liveconversation_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_liveconversation_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_liveconversation_PrincipalObjectAttributeAccesses() {
        return this._msdyn_liveconversation_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_liveconversation_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_liveconversation_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_liveconversation_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_liveconversation_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_liveconversation_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_liveconversation_ProcessSession() {
        return this._msdyn_liveconversation_ProcessSession;
    };
    /**
     * Sets the msdyn_liveconversation_ProcessSession property value. 
     * @param value Value to set for the msdyn_liveconversation_ProcessSession property.
     */
    public set msdyn_liveconversation_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_liveconversation_ProcessSession = value;
    };
    /**
     * Gets the msdyn_liveconversation_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_liveconversation_QueueItems() {
        return this._msdyn_liveconversation_QueueItems;
    };
    /**
     * Sets the msdyn_liveconversation_QueueItems property value. 
     * @param value Value to set for the msdyn_liveconversation_QueueItems property.
     */
    public set msdyn_liveconversation_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_liveconversation_QueueItems = value;
    };
    /**
     * Gets the msdyn_liveconversation_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_liveconversation_SyncErrors() {
        return this._msdyn_liveconversation_SyncErrors;
    };
    /**
     * Sets the msdyn_liveconversation_SyncErrors property value. 
     * @param value Value to set for the msdyn_liveconversation_SyncErrors property.
     */
    public set msdyn_liveconversation_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_liveconversation_SyncErrors = value;
    };
    /**
     * Gets the msdyn_liveconversationid property value. 
     * @returns a string
     */
    public get msdyn_liveconversationid() {
        return this._msdyn_liveconversationid;
    };
    /**
     * Sets the msdyn_liveconversationid property value. 
     * @param value Value to set for the msdyn_liveconversationid property.
     */
    public set msdyn_liveconversationid(value: string | undefined) {
        this._msdyn_liveconversationid = value;
    };
    /**
     * Gets the msdyn_liveworkstreamid property value. 
     * @returns a msdyn_liveworkstream
     */
    public get msdyn_liveworkstreamid() {
        return this._msdyn_liveworkstreamid;
    };
    /**
     * Sets the msdyn_liveworkstreamid property value. 
     * @param value Value to set for the msdyn_liveworkstreamid property.
     */
    public set msdyn_liveworkstreamid(value: Msdyn_liveworkstream | undefined) {
        this._msdyn_liveworkstreamid = value;
    };
    /**
     * Gets the msdyn_modifiedon property value. 
     * @returns a Date
     */
    public get msdyn_modifiedon() {
        return this._msdyn_modifiedon;
    };
    /**
     * Sets the msdyn_modifiedon property value. 
     * @param value Value to set for the msdyn_modifiedon property.
     */
    public set msdyn_modifiedon(value: Date | undefined) {
        this._msdyn_modifiedon = value;
    };
    /**
     * Gets the msdyn_oclastsessionid property value. 
     * @returns a string
     */
    public get msdyn_oclastsessionid() {
        return this._msdyn_oclastsessionid;
    };
    /**
     * Sets the msdyn_oclastsessionid property value. 
     * @param value Value to set for the msdyn_oclastsessionid property.
     */
    public set msdyn_oclastsessionid(value: string | undefined) {
        this._msdyn_oclastsessionid = value;
    };
    /**
     * Gets the msdyn_queueid property value. 
     * @returns a msdyn_omnichannelqueue
     */
    public get msdyn_queueid() {
        return this._msdyn_queueid;
    };
    /**
     * Sets the msdyn_queueid property value. 
     * @param value Value to set for the msdyn_queueid property.
     */
    public set msdyn_queueid(value: Msdyn_omnichannelqueue | undefined) {
        this._msdyn_queueid = value;
    };
    /**
     * Gets the msdyn_startedon property value. 
     * @returns a Date
     */
    public get msdyn_startedon() {
        return this._msdyn_startedon;
    };
    /**
     * Sets the msdyn_startedon property value. 
     * @param value Value to set for the msdyn_startedon property.
     */
    public set msdyn_startedon(value: Date | undefined) {
        this._msdyn_startedon = value;
    };
    /**
     * Gets the msdyn_statecode property value. 
     * @returns a integer
     */
    public get msdyn_statecode() {
        return this._msdyn_statecode;
    };
    /**
     * Sets the msdyn_statecode property value. 
     * @param value Value to set for the msdyn_statecode property.
     */
    public set msdyn_statecode(value: number | undefined) {
        this._msdyn_statecode = value;
    };
    /**
     * Gets the msdyn_statuscode property value. 
     * @returns a integer
     */
    public get msdyn_statuscode() {
        return this._msdyn_statuscode;
    };
    /**
     * Sets the msdyn_statuscode property value. 
     * @param value Value to set for the msdyn_statuscode property.
     */
    public set msdyn_statuscode(value: number | undefined) {
        this._msdyn_statuscode = value;
    };
    /**
     * Gets the msdyn_statusupdatedon property value. 
     * @returns a Date
     */
    public get msdyn_statusupdatedon() {
        return this._msdyn_statusupdatedon;
    };
    /**
     * Sets the msdyn_statusupdatedon property value. 
     * @param value Value to set for the msdyn_statusupdatedon property.
     */
    public set msdyn_statusupdatedon(value: Date | undefined) {
        this._msdyn_statusupdatedon = value;
    };
    /**
     * Gets the msdyn_subject property value. 
     * @returns a string
     */
    public get msdyn_subject() {
        return this._msdyn_subject;
    };
    /**
     * Sets the msdyn_subject property value. 
     * @param value Value to set for the msdyn_subject property.
     */
    public set msdyn_subject(value: string | undefined) {
        this._msdyn_subject = value;
    };
    /**
     * Gets the msdyn_title property value. 
     * @returns a string
     */
    public get msdyn_title() {
        return this._msdyn_title;
    };
    /**
     * Sets the msdyn_title property value. 
     * @param value Value to set for the msdyn_title property.
     */
    public set msdyn_title(value: string | undefined) {
        this._msdyn_title = value;
    };
    /**
     * Gets the msdyn_transfercount property value. 
     * @returns a integer
     */
    public get msdyn_transfercount() {
        return this._msdyn_transfercount;
    };
    /**
     * Sets the msdyn_transfercount property value. 
     * @param value Value to set for the msdyn_transfercount property.
     */
    public set msdyn_transfercount(value: number | undefined) {
        this._msdyn_transfercount = value;
    };
    /**
     * Gets the msdyn_workstreamworkdistributionmode property value. 
     * @returns a integer
     */
    public get msdyn_workstreamworkdistributionmode() {
        return this._msdyn_workstreamworkdistributionmode;
    };
    /**
     * Sets the msdyn_workstreamworkdistributionmode property value. 
     * @param value Value to set for the msdyn_workstreamworkdistributionmode property.
     */
    public set msdyn_workstreamworkdistributionmode(value: number | undefined) {
        this._msdyn_workstreamworkdistributionmode = value;
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
        writer.writeStringValue("_msdyn_activeagentid_value", this._msdyn_activeagentid_value);
        writer.writeStringValue("_msdyn_cdsqueueid_value", this._msdyn_cdsqueueid_value);
        writer.writeStringValue("_msdyn_customer_value", this._msdyn_customer_value);
        writer.writeStringValue("_msdyn_liveworkstreamid_value", this._msdyn_liveworkstreamid_value);
        writer.writeStringValue("_msdyn_queueid_value", this._msdyn_queueid_value);
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
        writer.writeDateValue("msdyn_activeagentassignedon", this.msdyn_activeagentassignedon);
        writer.writeObjectValue<Systemuser>("msdyn_activeagentid", this.msdyn_activeagentid);
        writer.writeObjectValue<Queue>("msdyn_cdsqueueid", this.msdyn_cdsqueueid);
        writer.writeStringValue("msdyn_channel", this.msdyn_channel);
        writer.writeDateValue("msdyn_closedon", this.msdyn_closedon);
        writer.writeDateValue("msdyn_createdon", this.msdyn_createdon);
        writer.writeObjectValue<Account>("msdyn_customer_msdyn_liveconversation_account", this.msdyn_customer_msdyn_liveconversation_account);
        writer.writeObjectValue<Contact>("msdyn_customer_msdyn_liveconversation_contact", this.msdyn_customer_msdyn_liveconversation_contact);
        writer.writeNumberValue("msdyn_customersentimentlabel", this.msdyn_customersentimentlabel);
        writer.writeNumberValue("msdyn_escalationcount", this.msdyn_escalationcount);
        writer.writeDateValue("msdyn_initiatedon", this.msdyn_initiatedon);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_liveconversation_Annotations", this.msdyn_liveconversation_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_liveconversation_AsyncOperations", this.msdyn_liveconversation_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_liveconversation_BulkDeleteFailures", this.msdyn_liveconversation_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_liveconversation_connections1", this.msdyn_liveconversation_connections1);
        writer.writeCollectionOfObjectValues<Connection>("msdyn_liveconversation_connections2", this.msdyn_liveconversation_connections2);
        writer.writeCollectionOfObjectValues<Feedback>("msdyn_liveconversation_Feedback", this.msdyn_liveconversation_Feedback);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_liveconversation_MailboxTrackingFolders", this.msdyn_liveconversation_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_liveconversation_PrincipalObjectAttributeAccesses", this.msdyn_liveconversation_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_liveconversation_ProcessSession", this.msdyn_liveconversation_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_liveconversation_QueueItems", this.msdyn_liveconversation_QueueItems);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_liveconversation_SyncErrors", this.msdyn_liveconversation_SyncErrors);
        writer.writeStringValue("msdyn_liveconversationid", this.msdyn_liveconversationid);
        writer.writeObjectValue<Msdyn_liveworkstream>("msdyn_liveworkstreamid", this.msdyn_liveworkstreamid);
        writer.writeDateValue("msdyn_modifiedon", this.msdyn_modifiedon);
        writer.writeStringValue("msdyn_oclastsessionid", this.msdyn_oclastsessionid);
        writer.writeObjectValue<Msdyn_omnichannelqueue>("msdyn_queueid", this.msdyn_queueid);
        writer.writeDateValue("msdyn_startedon", this.msdyn_startedon);
        writer.writeNumberValue("msdyn_statecode", this.msdyn_statecode);
        writer.writeNumberValue("msdyn_statuscode", this.msdyn_statuscode);
        writer.writeDateValue("msdyn_statusupdatedon", this.msdyn_statusupdatedon);
        writer.writeStringValue("msdyn_subject", this.msdyn_subject);
        writer.writeStringValue("msdyn_title", this.msdyn_title);
        writer.writeNumberValue("msdyn_transfercount", this.msdyn_transfercount);
        writer.writeNumberValue("msdyn_workstreamworkdistributionmode", this.msdyn_workstreamworkdistributionmode);
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
