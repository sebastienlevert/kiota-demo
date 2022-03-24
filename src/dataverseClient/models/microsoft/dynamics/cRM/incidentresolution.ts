import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivitypartyFromDiscriminatorValue} from './createActivitypartyFromDiscriminatorValue';
import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcebookingFromDiscriminatorValue} from './createBookableresourcebookingFromDiscriminatorValue';
import {createBookableresourcebookingheaderFromDiscriminatorValue} from './createBookableresourcebookingheaderFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignFromDiscriminatorValue} from './createCampaignFromDiscriminatorValue';
import {createCampaignresponseFromDiscriminatorValue} from './createCampaignresponseFromDiscriminatorValue';
import {createEntitlementFromDiscriminatorValue} from './createEntitlementFromDiscriminatorValue';
import {createEntitlementtemplateFromDiscriminatorValue} from './createEntitlementtemplateFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createInteractionforemailFromDiscriminatorValue} from './createInteractionforemailFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createKnowledgebaserecordFromDiscriminatorValue} from './createKnowledgebaserecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMailboxFromDiscriminatorValue} from './createMailboxFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bulkdeletefailure, Bulkoperation, Businessunit, Campaign, Campaignactivity, Campaignresponse, Entitlement, Entitlementtemplate, Incident, Interactionforemail, Knowledgearticle, Knowledgebaserecord, Lead, Mailbox, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Service, Sla, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Incidentresolution extends Activitypointer implements Parsable {
    private __createdbyexternalparty_value?: string | undefined;
    private __incidentid_value?: string | undefined;
    private __modifiedbyexternalparty_value?: string | undefined;
    private _activityid_activitypointer?: Activitypointer | undefined;
    private _campaignResponse_IncidentResolutions?: Campaignresponse[] | undefined;
    private _category?: string | undefined;
    private _createdby_incidentresolution?: Systemuser | undefined;
    private _createdonbehalfby_incidentresolution?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _incidentid?: Incident | undefined;
    private _incidentresolution_activity_parties?: Activityparty[] | undefined;
    private _incidentResolution_Annotation?: Annotation[] | undefined;
    private _incidentResolution_AsyncOperations?: Asyncoperation[] | undefined;
    private _incidentResolution_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _incidentresolution_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _incidentresolution_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _incidentResolution_SyncErrors?: Syncerror[] | undefined;
    private _modifiedby_incidentresolution?: Systemuser | undefined;
    private _modifiedonbehalfby_incidentresolution?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid_incidentresolution?: Principal | undefined;
    private _owningbusinessunit_incidentresolution?: Businessunit | undefined;
    private _owningteam_incidentresolution?: Team | undefined;
    private _owninguser_incidentresolution?: Systemuser | undefined;
    private _regardingobjectid_account_incidentresolution?: Account | undefined;
    private _regardingobjectid_bookableresourcebooking_incidentresolution?: Bookableresourcebooking | undefined;
    private _regardingobjectid_bookableresourcebookingheader_incidentresolution?: Bookableresourcebookingheader | undefined;
    private _regardingobjectid_bulkoperation_incidentresolution?: Bulkoperation | undefined;
    private _regardingobjectid_campaign_incidentresolution?: Campaign | undefined;
    private _regardingobjectid_campaignactivity_incidentresolution?: Campaignactivity | undefined;
    private _regardingobjectid_entitlement_incidentresolution?: Entitlement | undefined;
    private _regardingobjectid_entitlementtemplate_incidentresolution?: Entitlementtemplate | undefined;
    private _regardingobjectid_knowledgearticle_incidentresolution?: Knowledgearticle | undefined;
    private _regardingobjectid_knowledgebaserecord_incidentresolution?: Knowledgebaserecord | undefined;
    private _regardingobjectid_lead_incidentresolution?: Lead | undefined;
    private _regardingobjectid_new_interactionforemail_incidentresolution?: Interactionforemail | undefined;
    private _resolutiontypecode?: number | undefined;
    private _sendermailboxid_incidentresolution?: Mailbox | undefined;
    private _serviceid_incidentresolution?: Service | undefined;
    private _sla_activitypointer_sla_incidentresolution?: Sla | undefined;
    private _slainvokedid_activitypointer_sla_incidentresolution?: Sla | undefined;
    private _subcategory?: string | undefined;
    private _timespent?: number | undefined;
    private _totaltimespent?: number | undefined;
    private _transactioncurrencyid_incidentresolution?: Transactioncurrency | undefined;
    /**
     * Gets the _createdbyexternalparty_value property value. 
     * @returns a string
     */
    public get _createdbyexternalparty_value() {
        return this.__createdbyexternalparty_value;
    };
    /**
     * Sets the _createdbyexternalparty_value property value. 
     * @param value Value to set for the _createdbyexternalparty_value property.
     */
    public set _createdbyexternalparty_value(value: string | undefined) {
        this.__createdbyexternalparty_value = value;
    };
    /**
     * Gets the _incidentid_value property value. 
     * @returns a string
     */
    public get _incidentid_value() {
        return this.__incidentid_value;
    };
    /**
     * Sets the _incidentid_value property value. 
     * @param value Value to set for the _incidentid_value property.
     */
    public set _incidentid_value(value: string | undefined) {
        this.__incidentid_value = value;
    };
    /**
     * Gets the _modifiedbyexternalparty_value property value. 
     * @returns a string
     */
    public get _modifiedbyexternalparty_value() {
        return this.__modifiedbyexternalparty_value;
    };
    /**
     * Sets the _modifiedbyexternalparty_value property value. 
     * @param value Value to set for the _modifiedbyexternalparty_value property.
     */
    public set _modifiedbyexternalparty_value(value: string | undefined) {
        this.__modifiedbyexternalparty_value = value;
    };
    /**
     * Gets the activityid_activitypointer property value. 
     * @returns a activitypointer
     */
    public get activityid_activitypointer() {
        return this._activityid_activitypointer;
    };
    /**
     * Sets the activityid_activitypointer property value. 
     * @param value Value to set for the activityid_activitypointer property.
     */
    public set activityid_activitypointer(value: Activitypointer | undefined) {
        this._activityid_activitypointer = value;
    };
    /**
     * Gets the campaignResponse_IncidentResolutions property value. 
     * @returns a campaignresponse
     */
    public get campaignResponse_IncidentResolutions() {
        return this._campaignResponse_IncidentResolutions;
    };
    /**
     * Sets the campaignResponse_IncidentResolutions property value. 
     * @param value Value to set for the CampaignResponse_IncidentResolutions property.
     */
    public set campaignResponse_IncidentResolutions(value: Campaignresponse[] | undefined) {
        this._campaignResponse_IncidentResolutions = value;
    };
    /**
     * Gets the category property value. 
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. 
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
    };
    /**
     * Instantiates a new incidentresolution and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby_incidentresolution property value. 
     * @returns a systemuser
     */
    public get createdby_incidentresolution() {
        return this._createdby_incidentresolution;
    };
    /**
     * Sets the createdby_incidentresolution property value. 
     * @param value Value to set for the createdby_incidentresolution property.
     */
    public set createdby_incidentresolution(value: Systemuser | undefined) {
        this._createdby_incidentresolution = value;
    };
    /**
     * Gets the createdonbehalfby_incidentresolution property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby_incidentresolution() {
        return this._createdonbehalfby_incidentresolution;
    };
    /**
     * Sets the createdonbehalfby_incidentresolution property value. 
     * @param value Value to set for the createdonbehalfby_incidentresolution property.
     */
    public set createdonbehalfby_incidentresolution(value: Systemuser | undefined) {
        this._createdonbehalfby_incidentresolution = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdbyexternalparty_value": (o, n) => { (o as unknown as Incidentresolution)._createdbyexternalparty_value = n.getStringValue(); },
            "_incidentid_value": (o, n) => { (o as unknown as Incidentresolution)._incidentid_value = n.getStringValue(); },
            "_modifiedbyexternalparty_value": (o, n) => { (o as unknown as Incidentresolution)._modifiedbyexternalparty_value = n.getStringValue(); },
            "activityid_activitypointer": (o, n) => { (o as unknown as Incidentresolution).activityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "campaignResponse_IncidentResolutions": (o, n) => { (o as unknown as Incidentresolution).campaignResponse_IncidentResolutions = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "category": (o, n) => { (o as unknown as Incidentresolution).category = n.getStringValue(); },
            "createdby_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).createdby_incidentresolution = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdonbehalfby_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).createdonbehalfby_incidentresolution = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Incidentresolution).importsequencenumber = n.getNumberValue(); },
            "incidentid": (o, n) => { (o as unknown as Incidentresolution).incidentid = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "incidentresolution_activity_parties": (o, n) => { (o as unknown as Incidentresolution).incidentresolution_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "incidentResolution_Annotation": (o, n) => { (o as unknown as Incidentresolution).incidentResolution_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "incidentResolution_AsyncOperations": (o, n) => { (o as unknown as Incidentresolution).incidentResolution_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "incidentResolution_BulkDeleteFailures": (o, n) => { (o as unknown as Incidentresolution).incidentResolution_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "incidentresolution_MailboxTrackingFolders": (o, n) => { (o as unknown as Incidentresolution).incidentresolution_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "incidentresolution_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Incidentresolution).incidentresolution_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "incidentResolution_SyncErrors": (o, n) => { (o as unknown as Incidentresolution).incidentResolution_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "modifiedby_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).modifiedby_incidentresolution = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedonbehalfby_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).modifiedonbehalfby_incidentresolution = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Incidentresolution).overriddencreatedon = n.getDateValue(); },
            "ownerid_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).ownerid_incidentresolution = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).owningbusinessunit_incidentresolution = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).owningteam_incidentresolution = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).owninguser_incidentresolution = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_account_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_account_incidentresolution = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebooking_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_bookableresourcebooking_incidentresolution = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebookingheader_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_bookableresourcebookingheader_incidentresolution = n.getObjectValue<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "regardingobjectid_bulkoperation_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_bulkoperation_incidentresolution = n.getObjectValue<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "regardingobjectid_campaign_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_campaign_incidentresolution = n.getObjectValue<Campaign>(createCampaignFromDiscriminatorValue); },
            "regardingobjectid_campaignactivity_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_campaignactivity_incidentresolution = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "regardingobjectid_entitlement_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_entitlement_incidentresolution = n.getObjectValue<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "regardingobjectid_entitlementtemplate_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_entitlementtemplate_incidentresolution = n.getObjectValue<Entitlementtemplate>(createEntitlementtemplateFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_knowledgearticle_incidentresolution = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_knowledgebaserecord_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_knowledgebaserecord_incidentresolution = n.getObjectValue<Knowledgebaserecord>(createKnowledgebaserecordFromDiscriminatorValue); },
            "regardingobjectid_lead_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_lead_incidentresolution = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_new_interactionforemail_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).regardingobjectid_new_interactionforemail_incidentresolution = n.getObjectValue<Interactionforemail>(createInteractionforemailFromDiscriminatorValue); },
            "resolutiontypecode": (o, n) => { (o as unknown as Incidentresolution).resolutiontypecode = n.getNumberValue(); },
            "sendermailboxid_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).sendermailboxid_incidentresolution = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "serviceid_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).serviceid_incidentresolution = n.getObjectValue<Service>(createServiceFromDiscriminatorValue); },
            "sla_activitypointer_sla_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).sla_activitypointer_sla_incidentresolution = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slainvokedid_activitypointer_sla_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).slainvokedid_activitypointer_sla_incidentresolution = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "subcategory": (o, n) => { (o as unknown as Incidentresolution).subcategory = n.getStringValue(); },
            "timespent": (o, n) => { (o as unknown as Incidentresolution).timespent = n.getNumberValue(); },
            "totaltimespent": (o, n) => { (o as unknown as Incidentresolution).totaltimespent = n.getNumberValue(); },
            "transactioncurrencyid_incidentresolution": (o, n) => { (o as unknown as Incidentresolution).transactioncurrencyid_incidentresolution = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
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
     * Gets the incidentid property value. 
     * @returns a incident
     */
    public get incidentid() {
        return this._incidentid;
    };
    /**
     * Sets the incidentid property value. 
     * @param value Value to set for the incidentid property.
     */
    public set incidentid(value: Incident | undefined) {
        this._incidentid = value;
    };
    /**
     * Gets the incidentresolution_activity_parties property value. 
     * @returns a activityparty
     */
    public get incidentresolution_activity_parties() {
        return this._incidentresolution_activity_parties;
    };
    /**
     * Sets the incidentresolution_activity_parties property value. 
     * @param value Value to set for the incidentresolution_activity_parties property.
     */
    public set incidentresolution_activity_parties(value: Activityparty[] | undefined) {
        this._incidentresolution_activity_parties = value;
    };
    /**
     * Gets the incidentResolution_Annotation property value. 
     * @returns a annotation
     */
    public get incidentResolution_Annotation() {
        return this._incidentResolution_Annotation;
    };
    /**
     * Sets the incidentResolution_Annotation property value. 
     * @param value Value to set for the IncidentResolution_Annotation property.
     */
    public set incidentResolution_Annotation(value: Annotation[] | undefined) {
        this._incidentResolution_Annotation = value;
    };
    /**
     * Gets the incidentResolution_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get incidentResolution_AsyncOperations() {
        return this._incidentResolution_AsyncOperations;
    };
    /**
     * Sets the incidentResolution_AsyncOperations property value. 
     * @param value Value to set for the IncidentResolution_AsyncOperations property.
     */
    public set incidentResolution_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._incidentResolution_AsyncOperations = value;
    };
    /**
     * Gets the incidentResolution_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get incidentResolution_BulkDeleteFailures() {
        return this._incidentResolution_BulkDeleteFailures;
    };
    /**
     * Sets the incidentResolution_BulkDeleteFailures property value. 
     * @param value Value to set for the IncidentResolution_BulkDeleteFailures property.
     */
    public set incidentResolution_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._incidentResolution_BulkDeleteFailures = value;
    };
    /**
     * Gets the incidentresolution_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get incidentresolution_MailboxTrackingFolders() {
        return this._incidentresolution_MailboxTrackingFolders;
    };
    /**
     * Sets the incidentresolution_MailboxTrackingFolders property value. 
     * @param value Value to set for the incidentresolution_MailboxTrackingFolders property.
     */
    public set incidentresolution_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._incidentresolution_MailboxTrackingFolders = value;
    };
    /**
     * Gets the incidentresolution_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get incidentresolution_PrincipalObjectAttributeAccesses() {
        return this._incidentresolution_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the incidentresolution_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the incidentresolution_PrincipalObjectAttributeAccesses property.
     */
    public set incidentresolution_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._incidentresolution_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the incidentResolution_SyncErrors property value. 
     * @returns a syncerror
     */
    public get incidentResolution_SyncErrors() {
        return this._incidentResolution_SyncErrors;
    };
    /**
     * Sets the incidentResolution_SyncErrors property value. 
     * @param value Value to set for the IncidentResolution_SyncErrors property.
     */
    public set incidentResolution_SyncErrors(value: Syncerror[] | undefined) {
        this._incidentResolution_SyncErrors = value;
    };
    /**
     * Gets the modifiedby_incidentresolution property value. 
     * @returns a systemuser
     */
    public get modifiedby_incidentresolution() {
        return this._modifiedby_incidentresolution;
    };
    /**
     * Sets the modifiedby_incidentresolution property value. 
     * @param value Value to set for the modifiedby_incidentresolution property.
     */
    public set modifiedby_incidentresolution(value: Systemuser | undefined) {
        this._modifiedby_incidentresolution = value;
    };
    /**
     * Gets the modifiedonbehalfby_incidentresolution property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby_incidentresolution() {
        return this._modifiedonbehalfby_incidentresolution;
    };
    /**
     * Sets the modifiedonbehalfby_incidentresolution property value. 
     * @param value Value to set for the modifiedonbehalfby_incidentresolution property.
     */
    public set modifiedonbehalfby_incidentresolution(value: Systemuser | undefined) {
        this._modifiedonbehalfby_incidentresolution = value;
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
     * Gets the ownerid_incidentresolution property value. 
     * @returns a principal
     */
    public get ownerid_incidentresolution() {
        return this._ownerid_incidentresolution;
    };
    /**
     * Sets the ownerid_incidentresolution property value. 
     * @param value Value to set for the ownerid_incidentresolution property.
     */
    public set ownerid_incidentresolution(value: Principal | undefined) {
        this._ownerid_incidentresolution = value;
    };
    /**
     * Gets the owningbusinessunit_incidentresolution property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit_incidentresolution() {
        return this._owningbusinessunit_incidentresolution;
    };
    /**
     * Sets the owningbusinessunit_incidentresolution property value. 
     * @param value Value to set for the owningbusinessunit_incidentresolution property.
     */
    public set owningbusinessunit_incidentresolution(value: Businessunit | undefined) {
        this._owningbusinessunit_incidentresolution = value;
    };
    /**
     * Gets the owningteam_incidentresolution property value. 
     * @returns a team
     */
    public get owningteam_incidentresolution() {
        return this._owningteam_incidentresolution;
    };
    /**
     * Sets the owningteam_incidentresolution property value. 
     * @param value Value to set for the owningteam_incidentresolution property.
     */
    public set owningteam_incidentresolution(value: Team | undefined) {
        this._owningteam_incidentresolution = value;
    };
    /**
     * Gets the owninguser_incidentresolution property value. 
     * @returns a systemuser
     */
    public get owninguser_incidentresolution() {
        return this._owninguser_incidentresolution;
    };
    /**
     * Sets the owninguser_incidentresolution property value. 
     * @param value Value to set for the owninguser_incidentresolution property.
     */
    public set owninguser_incidentresolution(value: Systemuser | undefined) {
        this._owninguser_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_account_incidentresolution property value. 
     * @returns a account
     */
    public get regardingobjectid_account_incidentresolution() {
        return this._regardingobjectid_account_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_account_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_account_incidentresolution property.
     */
    public set regardingobjectid_account_incidentresolution(value: Account | undefined) {
        this._regardingobjectid_account_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebooking_incidentresolution property value. 
     * @returns a bookableresourcebooking
     */
    public get regardingobjectid_bookableresourcebooking_incidentresolution() {
        return this._regardingobjectid_bookableresourcebooking_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebooking_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebooking_incidentresolution property.
     */
    public set regardingobjectid_bookableresourcebooking_incidentresolution(value: Bookableresourcebooking | undefined) {
        this._regardingobjectid_bookableresourcebooking_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebookingheader_incidentresolution property value. 
     * @returns a bookableresourcebookingheader
     */
    public get regardingobjectid_bookableresourcebookingheader_incidentresolution() {
        return this._regardingobjectid_bookableresourcebookingheader_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebookingheader_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebookingheader_incidentresolution property.
     */
    public set regardingobjectid_bookableresourcebookingheader_incidentresolution(value: Bookableresourcebookingheader | undefined) {
        this._regardingobjectid_bookableresourcebookingheader_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_bulkoperation_incidentresolution property value. 
     * @returns a bulkoperation
     */
    public get regardingobjectid_bulkoperation_incidentresolution() {
        return this._regardingobjectid_bulkoperation_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_bulkoperation_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_bulkoperation_incidentresolution property.
     */
    public set regardingobjectid_bulkoperation_incidentresolution(value: Bulkoperation | undefined) {
        this._regardingobjectid_bulkoperation_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_campaign_incidentresolution property value. 
     * @returns a campaign
     */
    public get regardingobjectid_campaign_incidentresolution() {
        return this._regardingobjectid_campaign_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_campaign_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_campaign_incidentresolution property.
     */
    public set regardingobjectid_campaign_incidentresolution(value: Campaign | undefined) {
        this._regardingobjectid_campaign_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_campaignactivity_incidentresolution property value. 
     * @returns a campaignactivity
     */
    public get regardingobjectid_campaignactivity_incidentresolution() {
        return this._regardingobjectid_campaignactivity_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_campaignactivity_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_campaignactivity_incidentresolution property.
     */
    public set regardingobjectid_campaignactivity_incidentresolution(value: Campaignactivity | undefined) {
        this._regardingobjectid_campaignactivity_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_entitlement_incidentresolution property value. 
     * @returns a entitlement
     */
    public get regardingobjectid_entitlement_incidentresolution() {
        return this._regardingobjectid_entitlement_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_entitlement_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_entitlement_incidentresolution property.
     */
    public set regardingobjectid_entitlement_incidentresolution(value: Entitlement | undefined) {
        this._regardingobjectid_entitlement_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_entitlementtemplate_incidentresolution property value. 
     * @returns a entitlementtemplate
     */
    public get regardingobjectid_entitlementtemplate_incidentresolution() {
        return this._regardingobjectid_entitlementtemplate_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_entitlementtemplate_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_entitlementtemplate_incidentresolution property.
     */
    public set regardingobjectid_entitlementtemplate_incidentresolution(value: Entitlementtemplate | undefined) {
        this._regardingobjectid_entitlementtemplate_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle_incidentresolution property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle_incidentresolution() {
        return this._regardingobjectid_knowledgearticle_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle_incidentresolution property.
     */
    public set regardingobjectid_knowledgearticle_incidentresolution(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_knowledgebaserecord_incidentresolution property value. 
     * @returns a knowledgebaserecord
     */
    public get regardingobjectid_knowledgebaserecord_incidentresolution() {
        return this._regardingobjectid_knowledgebaserecord_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_knowledgebaserecord_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_knowledgebaserecord_incidentresolution property.
     */
    public set regardingobjectid_knowledgebaserecord_incidentresolution(value: Knowledgebaserecord | undefined) {
        this._regardingobjectid_knowledgebaserecord_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_lead_incidentresolution property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead_incidentresolution() {
        return this._regardingobjectid_lead_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_lead_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_lead_incidentresolution property.
     */
    public set regardingobjectid_lead_incidentresolution(value: Lead | undefined) {
        this._regardingobjectid_lead_incidentresolution = value;
    };
    /**
     * Gets the regardingobjectid_new_interactionforemail_incidentresolution property value. 
     * @returns a interactionforemail
     */
    public get regardingobjectid_new_interactionforemail_incidentresolution() {
        return this._regardingobjectid_new_interactionforemail_incidentresolution;
    };
    /**
     * Sets the regardingobjectid_new_interactionforemail_incidentresolution property value. 
     * @param value Value to set for the regardingobjectid_new_interactionforemail_incidentresolution property.
     */
    public set regardingobjectid_new_interactionforemail_incidentresolution(value: Interactionforemail | undefined) {
        this._regardingobjectid_new_interactionforemail_incidentresolution = value;
    };
    /**
     * Gets the resolutiontypecode property value. 
     * @returns a integer
     */
    public get resolutiontypecode() {
        return this._resolutiontypecode;
    };
    /**
     * Sets the resolutiontypecode property value. 
     * @param value Value to set for the resolutiontypecode property.
     */
    public set resolutiontypecode(value: number | undefined) {
        this._resolutiontypecode = value;
    };
    /**
     * Gets the sendermailboxid_incidentresolution property value. 
     * @returns a mailbox
     */
    public get sendermailboxid_incidentresolution() {
        return this._sendermailboxid_incidentresolution;
    };
    /**
     * Sets the sendermailboxid_incidentresolution property value. 
     * @param value Value to set for the sendermailboxid_incidentresolution property.
     */
    public set sendermailboxid_incidentresolution(value: Mailbox | undefined) {
        this._sendermailboxid_incidentresolution = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdbyexternalparty_value", this._createdbyexternalparty_value);
        writer.writeStringValue("_incidentid_value", this._incidentid_value);
        writer.writeStringValue("_modifiedbyexternalparty_value", this._modifiedbyexternalparty_value);
        writer.writeObjectValue<Activitypointer>("activityid_activitypointer", this.activityid_activitypointer);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaignResponse_IncidentResolutions", this.campaignResponse_IncidentResolutions);
        writer.writeStringValue("category", this.category);
        writer.writeObjectValue<Systemuser>("createdby_incidentresolution", this.createdby_incidentresolution);
        writer.writeObjectValue<Systemuser>("createdonbehalfby_incidentresolution", this.createdonbehalfby_incidentresolution);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Incident>("incidentid", this.incidentid);
        writer.writeCollectionOfObjectValues<Activityparty>("incidentresolution_activity_parties", this.incidentresolution_activity_parties);
        writer.writeCollectionOfObjectValues<Annotation>("incidentResolution_Annotation", this.incidentResolution_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("incidentResolution_AsyncOperations", this.incidentResolution_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("incidentResolution_BulkDeleteFailures", this.incidentResolution_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("incidentresolution_MailboxTrackingFolders", this.incidentresolution_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("incidentresolution_PrincipalObjectAttributeAccesses", this.incidentresolution_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("incidentResolution_SyncErrors", this.incidentResolution_SyncErrors);
        writer.writeObjectValue<Systemuser>("modifiedby_incidentresolution", this.modifiedby_incidentresolution);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby_incidentresolution", this.modifiedonbehalfby_incidentresolution);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid_incidentresolution", this.ownerid_incidentresolution);
        writer.writeObjectValue<Businessunit>("owningbusinessunit_incidentresolution", this.owningbusinessunit_incidentresolution);
        writer.writeObjectValue<Team>("owningteam_incidentresolution", this.owningteam_incidentresolution);
        writer.writeObjectValue<Systemuser>("owninguser_incidentresolution", this.owninguser_incidentresolution);
        writer.writeObjectValue<Account>("regardingobjectid_account_incidentresolution", this.regardingobjectid_account_incidentresolution);
        writer.writeObjectValue<Bookableresourcebooking>("regardingobjectid_bookableresourcebooking_incidentresolution", this.regardingobjectid_bookableresourcebooking_incidentresolution);
        writer.writeObjectValue<Bookableresourcebookingheader>("regardingobjectid_bookableresourcebookingheader_incidentresolution", this.regardingobjectid_bookableresourcebookingheader_incidentresolution);
        writer.writeObjectValue<Bulkoperation>("regardingobjectid_bulkoperation_incidentresolution", this.regardingobjectid_bulkoperation_incidentresolution);
        writer.writeObjectValue<Campaign>("regardingobjectid_campaign_incidentresolution", this.regardingobjectid_campaign_incidentresolution);
        writer.writeObjectValue<Campaignactivity>("regardingobjectid_campaignactivity_incidentresolution", this.regardingobjectid_campaignactivity_incidentresolution);
        writer.writeObjectValue<Entitlement>("regardingobjectid_entitlement_incidentresolution", this.regardingobjectid_entitlement_incidentresolution);
        writer.writeObjectValue<Entitlementtemplate>("regardingobjectid_entitlementtemplate_incidentresolution", this.regardingobjectid_entitlementtemplate_incidentresolution);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle_incidentresolution", this.regardingobjectid_knowledgearticle_incidentresolution);
        writer.writeObjectValue<Knowledgebaserecord>("regardingobjectid_knowledgebaserecord_incidentresolution", this.regardingobjectid_knowledgebaserecord_incidentresolution);
        writer.writeObjectValue<Lead>("regardingobjectid_lead_incidentresolution", this.regardingobjectid_lead_incidentresolution);
        writer.writeObjectValue<Interactionforemail>("regardingobjectid_new_interactionforemail_incidentresolution", this.regardingobjectid_new_interactionforemail_incidentresolution);
        writer.writeNumberValue("resolutiontypecode", this.resolutiontypecode);
        writer.writeObjectValue<Mailbox>("sendermailboxid_incidentresolution", this.sendermailboxid_incidentresolution);
        writer.writeObjectValue<Service>("serviceid_incidentresolution", this.serviceid_incidentresolution);
        writer.writeObjectValue<Sla>("sla_activitypointer_sla_incidentresolution", this.sla_activitypointer_sla_incidentresolution);
        writer.writeObjectValue<Sla>("slainvokedid_activitypointer_sla_incidentresolution", this.slainvokedid_activitypointer_sla_incidentresolution);
        writer.writeStringValue("subcategory", this.subcategory);
        writer.writeNumberValue("timespent", this.timespent);
        writer.writeNumberValue("totaltimespent", this.totaltimespent);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid_incidentresolution", this.transactioncurrencyid_incidentresolution);
    };
    /**
     * Gets the serviceid_incidentresolution property value. 
     * @returns a service
     */
    public get serviceid_incidentresolution() {
        return this._serviceid_incidentresolution;
    };
    /**
     * Sets the serviceid_incidentresolution property value. 
     * @param value Value to set for the serviceid_incidentresolution property.
     */
    public set serviceid_incidentresolution(value: Service | undefined) {
        this._serviceid_incidentresolution = value;
    };
    /**
     * Gets the sla_activitypointer_sla_incidentresolution property value. 
     * @returns a sla
     */
    public get sla_activitypointer_sla_incidentresolution() {
        return this._sla_activitypointer_sla_incidentresolution;
    };
    /**
     * Sets the sla_activitypointer_sla_incidentresolution property value. 
     * @param value Value to set for the sla_activitypointer_sla_incidentresolution property.
     */
    public set sla_activitypointer_sla_incidentresolution(value: Sla | undefined) {
        this._sla_activitypointer_sla_incidentresolution = value;
    };
    /**
     * Gets the slainvokedid_activitypointer_sla_incidentresolution property value. 
     * @returns a sla
     */
    public get slainvokedid_activitypointer_sla_incidentresolution() {
        return this._slainvokedid_activitypointer_sla_incidentresolution;
    };
    /**
     * Sets the slainvokedid_activitypointer_sla_incidentresolution property value. 
     * @param value Value to set for the slainvokedid_activitypointer_sla_incidentresolution property.
     */
    public set slainvokedid_activitypointer_sla_incidentresolution(value: Sla | undefined) {
        this._slainvokedid_activitypointer_sla_incidentresolution = value;
    };
    /**
     * Gets the subcategory property value. 
     * @returns a string
     */
    public get subcategory() {
        return this._subcategory;
    };
    /**
     * Sets the subcategory property value. 
     * @param value Value to set for the subcategory property.
     */
    public set subcategory(value: string | undefined) {
        this._subcategory = value;
    };
    /**
     * Gets the timespent property value. 
     * @returns a integer
     */
    public get timespent() {
        return this._timespent;
    };
    /**
     * Sets the timespent property value. 
     * @param value Value to set for the timespent property.
     */
    public set timespent(value: number | undefined) {
        this._timespent = value;
    };
    /**
     * Gets the totaltimespent property value. 
     * @returns a integer
     */
    public get totaltimespent() {
        return this._totaltimespent;
    };
    /**
     * Sets the totaltimespent property value. 
     * @param value Value to set for the totaltimespent property.
     */
    public set totaltimespent(value: number | undefined) {
        this._totaltimespent = value;
    };
    /**
     * Gets the transactioncurrencyid_incidentresolution property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid_incidentresolution() {
        return this._transactioncurrencyid_incidentresolution;
    };
    /**
     * Sets the transactioncurrencyid_incidentresolution property value. 
     * @param value Value to set for the transactioncurrencyid_incidentresolution property.
     */
    public set transactioncurrencyid_incidentresolution(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid_incidentresolution = value;
    };
}
