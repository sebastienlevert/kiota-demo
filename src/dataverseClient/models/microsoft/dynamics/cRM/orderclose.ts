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
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createMsdyn_playbookinstanceFromDiscriminatorValue} from './createMsdyn_playbookinstanceFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createServiceFromDiscriminatorValue} from './createServiceFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Activityparty, Activitypointer, Annotation, Asyncoperation, Bookableresourcebooking, Bookableresourcebookingheader, Bulkdeletefailure, Bulkoperation, Businessunit, Campaign, Campaignactivity, Campaignresponse, Entitlement, Entitlementtemplate, Incident, Interactionforemail, Knowledgearticle, Knowledgebaserecord, Lead, Mailbox, Mailboxtrackingfolder, Msdyn_customerasset, Msdyn_playbookinstance, Opportunity, Principal, Principalobjectattributeaccess, Salesorder, Service, Site, Sla, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Orderclose extends Activitypointer implements Parsable {
    private __salesorderid_value?: string | undefined;
    private _activityid_activitypointer?: Activitypointer | undefined;
    private _campaignResponse_OrderCloses?: Campaignresponse[] | undefined;
    private _category?: string | undefined;
    private _createdby_orderclose?: Systemuser | undefined;
    private _createdonbehalfby_orderclose?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby_orderclose?: Systemuser | undefined;
    private _modifiedonbehalfby_orderclose?: Systemuser | undefined;
    private _orderclose_activity_parties?: Activityparty[] | undefined;
    private _orderClose_Annotation?: Annotation[] | undefined;
    private _orderClose_AsyncOperations?: Asyncoperation[] | undefined;
    private _orderClose_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _orderclose_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _orderclose_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _orderClose_SyncErrors?: Syncerror[] | undefined;
    private _ordernumber?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid_orderclose?: Principal | undefined;
    private _owningbusinessunit_orderclose?: Businessunit | undefined;
    private _owningteam_orderclose?: Team | undefined;
    private _owninguser_orderclose?: Systemuser | undefined;
    private _regardingobjectid_account_orderclose?: Account | undefined;
    private _regardingobjectid_bookableresourcebooking_orderclose?: Bookableresourcebooking | undefined;
    private _regardingobjectid_bookableresourcebookingheader_orderclose?: Bookableresourcebookingheader | undefined;
    private _regardingobjectid_bulkoperation_orderclose?: Bulkoperation | undefined;
    private _regardingobjectid_campaign_orderclose?: Campaign | undefined;
    private _regardingobjectid_campaignactivity_orderclose?: Campaignactivity | undefined;
    private _regardingobjectid_entitlement_orderclose?: Entitlement | undefined;
    private _regardingobjectid_entitlementtemplate_orderclose?: Entitlementtemplate | undefined;
    private _regardingobjectid_incident_orderclose?: Incident | undefined;
    private _regardingobjectid_knowledgearticle_orderclose?: Knowledgearticle | undefined;
    private _regardingobjectid_knowledgebaserecord_orderclose?: Knowledgebaserecord | undefined;
    private _regardingobjectid_lead_orderclose?: Lead | undefined;
    private _regardingobjectid_msdyn_customerasset_orderclose?: Msdyn_customerasset | undefined;
    private _regardingobjectid_msdyn_playbookinstance_orderclose?: Msdyn_playbookinstance | undefined;
    private _regardingobjectid_new_interactionforemail_orderclose?: Interactionforemail | undefined;
    private _regardingobjectid_opportunity_orderclose?: Opportunity | undefined;
    private _regardingobjectid_site_orderclose?: Site | undefined;
    private _revision?: number | undefined;
    private _salesorderid?: Salesorder | undefined;
    private _sendermailboxid_orderclose?: Mailbox | undefined;
    private _serviceid_orderclose?: Service | undefined;
    private _sla_activitypointer_sla_orderclose?: Sla | undefined;
    private _slainvokedid_activitypointer_sla_orderclose?: Sla | undefined;
    private _subcategory?: string | undefined;
    private _transactioncurrencyid_orderclose?: Transactioncurrency | undefined;
    /**
     * Gets the _salesorderid_value property value. 
     * @returns a string
     */
    public get _salesorderid_value() {
        return this.__salesorderid_value;
    };
    /**
     * Sets the _salesorderid_value property value. 
     * @param value Value to set for the _salesorderid_value property.
     */
    public set _salesorderid_value(value: string | undefined) {
        this.__salesorderid_value = value;
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
     * Gets the campaignResponse_OrderCloses property value. 
     * @returns a campaignresponse
     */
    public get campaignResponse_OrderCloses() {
        return this._campaignResponse_OrderCloses;
    };
    /**
     * Sets the campaignResponse_OrderCloses property value. 
     * @param value Value to set for the CampaignResponse_OrderCloses property.
     */
    public set campaignResponse_OrderCloses(value: Campaignresponse[] | undefined) {
        this._campaignResponse_OrderCloses = value;
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
     * Instantiates a new orderclose and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby_orderclose property value. 
     * @returns a systemuser
     */
    public get createdby_orderclose() {
        return this._createdby_orderclose;
    };
    /**
     * Sets the createdby_orderclose property value. 
     * @param value Value to set for the createdby_orderclose property.
     */
    public set createdby_orderclose(value: Systemuser | undefined) {
        this._createdby_orderclose = value;
    };
    /**
     * Gets the createdonbehalfby_orderclose property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby_orderclose() {
        return this._createdonbehalfby_orderclose;
    };
    /**
     * Sets the createdonbehalfby_orderclose property value. 
     * @param value Value to set for the createdonbehalfby_orderclose property.
     */
    public set createdonbehalfby_orderclose(value: Systemuser | undefined) {
        this._createdonbehalfby_orderclose = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_salesorderid_value": (o, n) => { (o as unknown as Orderclose)._salesorderid_value = n.getStringValue(); },
            "activityid_activitypointer": (o, n) => { (o as unknown as Orderclose).activityid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "campaignResponse_OrderCloses": (o, n) => { (o as unknown as Orderclose).campaignResponse_OrderCloses = n.getCollectionOfObjectValues<Campaignresponse>(createCampaignresponseFromDiscriminatorValue); },
            "category": (o, n) => { (o as unknown as Orderclose).category = n.getStringValue(); },
            "createdby_orderclose": (o, n) => { (o as unknown as Orderclose).createdby_orderclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdonbehalfby_orderclose": (o, n) => { (o as unknown as Orderclose).createdonbehalfby_orderclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Orderclose).importsequencenumber = n.getNumberValue(); },
            "modifiedby_orderclose": (o, n) => { (o as unknown as Orderclose).modifiedby_orderclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedonbehalfby_orderclose": (o, n) => { (o as unknown as Orderclose).modifiedonbehalfby_orderclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "orderclose_activity_parties": (o, n) => { (o as unknown as Orderclose).orderclose_activity_parties = n.getCollectionOfObjectValues<Activityparty>(createActivitypartyFromDiscriminatorValue); },
            "orderClose_Annotation": (o, n) => { (o as unknown as Orderclose).orderClose_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "orderClose_AsyncOperations": (o, n) => { (o as unknown as Orderclose).orderClose_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "orderClose_BulkDeleteFailures": (o, n) => { (o as unknown as Orderclose).orderClose_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "orderclose_MailboxTrackingFolders": (o, n) => { (o as unknown as Orderclose).orderclose_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "orderclose_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Orderclose).orderclose_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "orderClose_SyncErrors": (o, n) => { (o as unknown as Orderclose).orderClose_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "ordernumber": (o, n) => { (o as unknown as Orderclose).ordernumber = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Orderclose).overriddencreatedon = n.getDateValue(); },
            "ownerid_orderclose": (o, n) => { (o as unknown as Orderclose).ownerid_orderclose = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit_orderclose": (o, n) => { (o as unknown as Orderclose).owningbusinessunit_orderclose = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam_orderclose": (o, n) => { (o as unknown as Orderclose).owningteam_orderclose = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser_orderclose": (o, n) => { (o as unknown as Orderclose).owninguser_orderclose = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "regardingobjectid_account_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_account_orderclose = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebooking_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_bookableresourcebooking_orderclose = n.getObjectValue<Bookableresourcebooking>(createBookableresourcebookingFromDiscriminatorValue); },
            "regardingobjectid_bookableresourcebookingheader_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_bookableresourcebookingheader_orderclose = n.getObjectValue<Bookableresourcebookingheader>(createBookableresourcebookingheaderFromDiscriminatorValue); },
            "regardingobjectid_bulkoperation_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_bulkoperation_orderclose = n.getObjectValue<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "regardingobjectid_campaign_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_campaign_orderclose = n.getObjectValue<Campaign>(createCampaignFromDiscriminatorValue); },
            "regardingobjectid_campaignactivity_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_campaignactivity_orderclose = n.getObjectValue<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "regardingobjectid_entitlement_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_entitlement_orderclose = n.getObjectValue<Entitlement>(createEntitlementFromDiscriminatorValue); },
            "regardingobjectid_entitlementtemplate_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_entitlementtemplate_orderclose = n.getObjectValue<Entitlementtemplate>(createEntitlementtemplateFromDiscriminatorValue); },
            "regardingobjectid_incident_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_incident_orderclose = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_knowledgearticle_orderclose = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_knowledgebaserecord_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_knowledgebaserecord_orderclose = n.getObjectValue<Knowledgebaserecord>(createKnowledgebaserecordFromDiscriminatorValue); },
            "regardingobjectid_lead_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_lead_orderclose = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_msdyn_customerasset_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_msdyn_customerasset_orderclose = n.getObjectValue<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "regardingobjectid_msdyn_playbookinstance_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_msdyn_playbookinstance_orderclose = n.getObjectValue<Msdyn_playbookinstance>(createMsdyn_playbookinstanceFromDiscriminatorValue); },
            "regardingobjectid_new_interactionforemail_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_new_interactionforemail_orderclose = n.getObjectValue<Interactionforemail>(createInteractionforemailFromDiscriminatorValue); },
            "regardingobjectid_opportunity_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_opportunity_orderclose = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regardingobjectid_site_orderclose": (o, n) => { (o as unknown as Orderclose).regardingobjectid_site_orderclose = n.getObjectValue<Site>(createSiteFromDiscriminatorValue); },
            "revision": (o, n) => { (o as unknown as Orderclose).revision = n.getNumberValue(); },
            "salesorderid": (o, n) => { (o as unknown as Orderclose).salesorderid = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "sendermailboxid_orderclose": (o, n) => { (o as unknown as Orderclose).sendermailboxid_orderclose = n.getObjectValue<Mailbox>(createMailboxFromDiscriminatorValue); },
            "serviceid_orderclose": (o, n) => { (o as unknown as Orderclose).serviceid_orderclose = n.getObjectValue<Service>(createServiceFromDiscriminatorValue); },
            "sla_activitypointer_sla_orderclose": (o, n) => { (o as unknown as Orderclose).sla_activitypointer_sla_orderclose = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "slainvokedid_activitypointer_sla_orderclose": (o, n) => { (o as unknown as Orderclose).slainvokedid_activitypointer_sla_orderclose = n.getObjectValue<Sla>(createSlaFromDiscriminatorValue); },
            "subcategory": (o, n) => { (o as unknown as Orderclose).subcategory = n.getStringValue(); },
            "transactioncurrencyid_orderclose": (o, n) => { (o as unknown as Orderclose).transactioncurrencyid_orderclose = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
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
     * Gets the modifiedby_orderclose property value. 
     * @returns a systemuser
     */
    public get modifiedby_orderclose() {
        return this._modifiedby_orderclose;
    };
    /**
     * Sets the modifiedby_orderclose property value. 
     * @param value Value to set for the modifiedby_orderclose property.
     */
    public set modifiedby_orderclose(value: Systemuser | undefined) {
        this._modifiedby_orderclose = value;
    };
    /**
     * Gets the modifiedonbehalfby_orderclose property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby_orderclose() {
        return this._modifiedonbehalfby_orderclose;
    };
    /**
     * Sets the modifiedonbehalfby_orderclose property value. 
     * @param value Value to set for the modifiedonbehalfby_orderclose property.
     */
    public set modifiedonbehalfby_orderclose(value: Systemuser | undefined) {
        this._modifiedonbehalfby_orderclose = value;
    };
    /**
     * Gets the orderclose_activity_parties property value. 
     * @returns a activityparty
     */
    public get orderclose_activity_parties() {
        return this._orderclose_activity_parties;
    };
    /**
     * Sets the orderclose_activity_parties property value. 
     * @param value Value to set for the orderclose_activity_parties property.
     */
    public set orderclose_activity_parties(value: Activityparty[] | undefined) {
        this._orderclose_activity_parties = value;
    };
    /**
     * Gets the orderClose_Annotation property value. 
     * @returns a annotation
     */
    public get orderClose_Annotation() {
        return this._orderClose_Annotation;
    };
    /**
     * Sets the orderClose_Annotation property value. 
     * @param value Value to set for the OrderClose_Annotation property.
     */
    public set orderClose_Annotation(value: Annotation[] | undefined) {
        this._orderClose_Annotation = value;
    };
    /**
     * Gets the orderClose_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get orderClose_AsyncOperations() {
        return this._orderClose_AsyncOperations;
    };
    /**
     * Sets the orderClose_AsyncOperations property value. 
     * @param value Value to set for the OrderClose_AsyncOperations property.
     */
    public set orderClose_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._orderClose_AsyncOperations = value;
    };
    /**
     * Gets the orderClose_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get orderClose_BulkDeleteFailures() {
        return this._orderClose_BulkDeleteFailures;
    };
    /**
     * Sets the orderClose_BulkDeleteFailures property value. 
     * @param value Value to set for the OrderClose_BulkDeleteFailures property.
     */
    public set orderClose_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._orderClose_BulkDeleteFailures = value;
    };
    /**
     * Gets the orderclose_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get orderclose_MailboxTrackingFolders() {
        return this._orderclose_MailboxTrackingFolders;
    };
    /**
     * Sets the orderclose_MailboxTrackingFolders property value. 
     * @param value Value to set for the orderclose_MailboxTrackingFolders property.
     */
    public set orderclose_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._orderclose_MailboxTrackingFolders = value;
    };
    /**
     * Gets the orderclose_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get orderclose_PrincipalObjectAttributeAccesses() {
        return this._orderclose_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the orderclose_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the orderclose_PrincipalObjectAttributeAccesses property.
     */
    public set orderclose_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._orderclose_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the orderClose_SyncErrors property value. 
     * @returns a syncerror
     */
    public get orderClose_SyncErrors() {
        return this._orderClose_SyncErrors;
    };
    /**
     * Sets the orderClose_SyncErrors property value. 
     * @param value Value to set for the OrderClose_SyncErrors property.
     */
    public set orderClose_SyncErrors(value: Syncerror[] | undefined) {
        this._orderClose_SyncErrors = value;
    };
    /**
     * Gets the ordernumber property value. 
     * @returns a string
     */
    public get ordernumber() {
        return this._ordernumber;
    };
    /**
     * Sets the ordernumber property value. 
     * @param value Value to set for the ordernumber property.
     */
    public set ordernumber(value: string | undefined) {
        this._ordernumber = value;
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
     * Gets the ownerid_orderclose property value. 
     * @returns a principal
     */
    public get ownerid_orderclose() {
        return this._ownerid_orderclose;
    };
    /**
     * Sets the ownerid_orderclose property value. 
     * @param value Value to set for the ownerid_orderclose property.
     */
    public set ownerid_orderclose(value: Principal | undefined) {
        this._ownerid_orderclose = value;
    };
    /**
     * Gets the owningbusinessunit_orderclose property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit_orderclose() {
        return this._owningbusinessunit_orderclose;
    };
    /**
     * Sets the owningbusinessunit_orderclose property value. 
     * @param value Value to set for the owningbusinessunit_orderclose property.
     */
    public set owningbusinessunit_orderclose(value: Businessunit | undefined) {
        this._owningbusinessunit_orderclose = value;
    };
    /**
     * Gets the owningteam_orderclose property value. 
     * @returns a team
     */
    public get owningteam_orderclose() {
        return this._owningteam_orderclose;
    };
    /**
     * Sets the owningteam_orderclose property value. 
     * @param value Value to set for the owningteam_orderclose property.
     */
    public set owningteam_orderclose(value: Team | undefined) {
        this._owningteam_orderclose = value;
    };
    /**
     * Gets the owninguser_orderclose property value. 
     * @returns a systemuser
     */
    public get owninguser_orderclose() {
        return this._owninguser_orderclose;
    };
    /**
     * Sets the owninguser_orderclose property value. 
     * @param value Value to set for the owninguser_orderclose property.
     */
    public set owninguser_orderclose(value: Systemuser | undefined) {
        this._owninguser_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_account_orderclose property value. 
     * @returns a account
     */
    public get regardingobjectid_account_orderclose() {
        return this._regardingobjectid_account_orderclose;
    };
    /**
     * Sets the regardingobjectid_account_orderclose property value. 
     * @param value Value to set for the regardingobjectid_account_orderclose property.
     */
    public set regardingobjectid_account_orderclose(value: Account | undefined) {
        this._regardingobjectid_account_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebooking_orderclose property value. 
     * @returns a bookableresourcebooking
     */
    public get regardingobjectid_bookableresourcebooking_orderclose() {
        return this._regardingobjectid_bookableresourcebooking_orderclose;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebooking_orderclose property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebooking_orderclose property.
     */
    public set regardingobjectid_bookableresourcebooking_orderclose(value: Bookableresourcebooking | undefined) {
        this._regardingobjectid_bookableresourcebooking_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_bookableresourcebookingheader_orderclose property value. 
     * @returns a bookableresourcebookingheader
     */
    public get regardingobjectid_bookableresourcebookingheader_orderclose() {
        return this._regardingobjectid_bookableresourcebookingheader_orderclose;
    };
    /**
     * Sets the regardingobjectid_bookableresourcebookingheader_orderclose property value. 
     * @param value Value to set for the regardingobjectid_bookableresourcebookingheader_orderclose property.
     */
    public set regardingobjectid_bookableresourcebookingheader_orderclose(value: Bookableresourcebookingheader | undefined) {
        this._regardingobjectid_bookableresourcebookingheader_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_bulkoperation_orderclose property value. 
     * @returns a bulkoperation
     */
    public get regardingobjectid_bulkoperation_orderclose() {
        return this._regardingobjectid_bulkoperation_orderclose;
    };
    /**
     * Sets the regardingobjectid_bulkoperation_orderclose property value. 
     * @param value Value to set for the regardingobjectid_bulkoperation_orderclose property.
     */
    public set regardingobjectid_bulkoperation_orderclose(value: Bulkoperation | undefined) {
        this._regardingobjectid_bulkoperation_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_campaign_orderclose property value. 
     * @returns a campaign
     */
    public get regardingobjectid_campaign_orderclose() {
        return this._regardingobjectid_campaign_orderclose;
    };
    /**
     * Sets the regardingobjectid_campaign_orderclose property value. 
     * @param value Value to set for the regardingobjectid_campaign_orderclose property.
     */
    public set regardingobjectid_campaign_orderclose(value: Campaign | undefined) {
        this._regardingobjectid_campaign_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_campaignactivity_orderclose property value. 
     * @returns a campaignactivity
     */
    public get regardingobjectid_campaignactivity_orderclose() {
        return this._regardingobjectid_campaignactivity_orderclose;
    };
    /**
     * Sets the regardingobjectid_campaignactivity_orderclose property value. 
     * @param value Value to set for the regardingobjectid_campaignactivity_orderclose property.
     */
    public set regardingobjectid_campaignactivity_orderclose(value: Campaignactivity | undefined) {
        this._regardingobjectid_campaignactivity_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_entitlement_orderclose property value. 
     * @returns a entitlement
     */
    public get regardingobjectid_entitlement_orderclose() {
        return this._regardingobjectid_entitlement_orderclose;
    };
    /**
     * Sets the regardingobjectid_entitlement_orderclose property value. 
     * @param value Value to set for the regardingobjectid_entitlement_orderclose property.
     */
    public set regardingobjectid_entitlement_orderclose(value: Entitlement | undefined) {
        this._regardingobjectid_entitlement_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_entitlementtemplate_orderclose property value. 
     * @returns a entitlementtemplate
     */
    public get regardingobjectid_entitlementtemplate_orderclose() {
        return this._regardingobjectid_entitlementtemplate_orderclose;
    };
    /**
     * Sets the regardingobjectid_entitlementtemplate_orderclose property value. 
     * @param value Value to set for the regardingobjectid_entitlementtemplate_orderclose property.
     */
    public set regardingobjectid_entitlementtemplate_orderclose(value: Entitlementtemplate | undefined) {
        this._regardingobjectid_entitlementtemplate_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_incident_orderclose property value. 
     * @returns a incident
     */
    public get regardingobjectid_incident_orderclose() {
        return this._regardingobjectid_incident_orderclose;
    };
    /**
     * Sets the regardingobjectid_incident_orderclose property value. 
     * @param value Value to set for the regardingobjectid_incident_orderclose property.
     */
    public set regardingobjectid_incident_orderclose(value: Incident | undefined) {
        this._regardingobjectid_incident_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle_orderclose property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle_orderclose() {
        return this._regardingobjectid_knowledgearticle_orderclose;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle_orderclose property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle_orderclose property.
     */
    public set regardingobjectid_knowledgearticle_orderclose(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_knowledgebaserecord_orderclose property value. 
     * @returns a knowledgebaserecord
     */
    public get regardingobjectid_knowledgebaserecord_orderclose() {
        return this._regardingobjectid_knowledgebaserecord_orderclose;
    };
    /**
     * Sets the regardingobjectid_knowledgebaserecord_orderclose property value. 
     * @param value Value to set for the regardingobjectid_knowledgebaserecord_orderclose property.
     */
    public set regardingobjectid_knowledgebaserecord_orderclose(value: Knowledgebaserecord | undefined) {
        this._regardingobjectid_knowledgebaserecord_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_lead_orderclose property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead_orderclose() {
        return this._regardingobjectid_lead_orderclose;
    };
    /**
     * Sets the regardingobjectid_lead_orderclose property value. 
     * @param value Value to set for the regardingobjectid_lead_orderclose property.
     */
    public set regardingobjectid_lead_orderclose(value: Lead | undefined) {
        this._regardingobjectid_lead_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_customerasset_orderclose property value. 
     * @returns a msdyn_customerasset
     */
    public get regardingobjectid_msdyn_customerasset_orderclose() {
        return this._regardingobjectid_msdyn_customerasset_orderclose;
    };
    /**
     * Sets the regardingobjectid_msdyn_customerasset_orderclose property value. 
     * @param value Value to set for the regardingobjectid_msdyn_customerasset_orderclose property.
     */
    public set regardingobjectid_msdyn_customerasset_orderclose(value: Msdyn_customerasset | undefined) {
        this._regardingobjectid_msdyn_customerasset_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_playbookinstance_orderclose property value. 
     * @returns a msdyn_playbookinstance
     */
    public get regardingobjectid_msdyn_playbookinstance_orderclose() {
        return this._regardingobjectid_msdyn_playbookinstance_orderclose;
    };
    /**
     * Sets the regardingobjectid_msdyn_playbookinstance_orderclose property value. 
     * @param value Value to set for the regardingobjectid_msdyn_playbookinstance_orderclose property.
     */
    public set regardingobjectid_msdyn_playbookinstance_orderclose(value: Msdyn_playbookinstance | undefined) {
        this._regardingobjectid_msdyn_playbookinstance_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_new_interactionforemail_orderclose property value. 
     * @returns a interactionforemail
     */
    public get regardingobjectid_new_interactionforemail_orderclose() {
        return this._regardingobjectid_new_interactionforemail_orderclose;
    };
    /**
     * Sets the regardingobjectid_new_interactionforemail_orderclose property value. 
     * @param value Value to set for the regardingobjectid_new_interactionforemail_orderclose property.
     */
    public set regardingobjectid_new_interactionforemail_orderclose(value: Interactionforemail | undefined) {
        this._regardingobjectid_new_interactionforemail_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_opportunity_orderclose property value. 
     * @returns a opportunity
     */
    public get regardingobjectid_opportunity_orderclose() {
        return this._regardingobjectid_opportunity_orderclose;
    };
    /**
     * Sets the regardingobjectid_opportunity_orderclose property value. 
     * @param value Value to set for the regardingobjectid_opportunity_orderclose property.
     */
    public set regardingobjectid_opportunity_orderclose(value: Opportunity | undefined) {
        this._regardingobjectid_opportunity_orderclose = value;
    };
    /**
     * Gets the regardingobjectid_site_orderclose property value. 
     * @returns a site
     */
    public get regardingobjectid_site_orderclose() {
        return this._regardingobjectid_site_orderclose;
    };
    /**
     * Sets the regardingobjectid_site_orderclose property value. 
     * @param value Value to set for the regardingobjectid_site_orderclose property.
     */
    public set regardingobjectid_site_orderclose(value: Site | undefined) {
        this._regardingobjectid_site_orderclose = value;
    };
    /**
     * Gets the revision property value. 
     * @returns a integer
     */
    public get revision() {
        return this._revision;
    };
    /**
     * Sets the revision property value. 
     * @param value Value to set for the revision property.
     */
    public set revision(value: number | undefined) {
        this._revision = value;
    };
    /**
     * Gets the salesorderid property value. 
     * @returns a salesorder
     */
    public get salesorderid() {
        return this._salesorderid;
    };
    /**
     * Sets the salesorderid property value. 
     * @param value Value to set for the salesorderid property.
     */
    public set salesorderid(value: Salesorder | undefined) {
        this._salesorderid = value;
    };
    /**
     * Gets the sendermailboxid_orderclose property value. 
     * @returns a mailbox
     */
    public get sendermailboxid_orderclose() {
        return this._sendermailboxid_orderclose;
    };
    /**
     * Sets the sendermailboxid_orderclose property value. 
     * @param value Value to set for the sendermailboxid_orderclose property.
     */
    public set sendermailboxid_orderclose(value: Mailbox | undefined) {
        this._sendermailboxid_orderclose = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_salesorderid_value", this._salesorderid_value);
        writer.writeObjectValue<Activitypointer>("activityid_activitypointer", this.activityid_activitypointer);
        writer.writeCollectionOfObjectValues<Campaignresponse>("campaignResponse_OrderCloses", this.campaignResponse_OrderCloses);
        writer.writeStringValue("category", this.category);
        writer.writeObjectValue<Systemuser>("createdby_orderclose", this.createdby_orderclose);
        writer.writeObjectValue<Systemuser>("createdonbehalfby_orderclose", this.createdonbehalfby_orderclose);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby_orderclose", this.modifiedby_orderclose);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby_orderclose", this.modifiedonbehalfby_orderclose);
        writer.writeCollectionOfObjectValues<Activityparty>("orderclose_activity_parties", this.orderclose_activity_parties);
        writer.writeCollectionOfObjectValues<Annotation>("orderClose_Annotation", this.orderClose_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("orderClose_AsyncOperations", this.orderClose_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("orderClose_BulkDeleteFailures", this.orderClose_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("orderclose_MailboxTrackingFolders", this.orderclose_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("orderclose_PrincipalObjectAttributeAccesses", this.orderclose_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Syncerror>("orderClose_SyncErrors", this.orderClose_SyncErrors);
        writer.writeStringValue("ordernumber", this.ordernumber);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid_orderclose", this.ownerid_orderclose);
        writer.writeObjectValue<Businessunit>("owningbusinessunit_orderclose", this.owningbusinessunit_orderclose);
        writer.writeObjectValue<Team>("owningteam_orderclose", this.owningteam_orderclose);
        writer.writeObjectValue<Systemuser>("owninguser_orderclose", this.owninguser_orderclose);
        writer.writeObjectValue<Account>("regardingobjectid_account_orderclose", this.regardingobjectid_account_orderclose);
        writer.writeObjectValue<Bookableresourcebooking>("regardingobjectid_bookableresourcebooking_orderclose", this.regardingobjectid_bookableresourcebooking_orderclose);
        writer.writeObjectValue<Bookableresourcebookingheader>("regardingobjectid_bookableresourcebookingheader_orderclose", this.regardingobjectid_bookableresourcebookingheader_orderclose);
        writer.writeObjectValue<Bulkoperation>("regardingobjectid_bulkoperation_orderclose", this.regardingobjectid_bulkoperation_orderclose);
        writer.writeObjectValue<Campaign>("regardingobjectid_campaign_orderclose", this.regardingobjectid_campaign_orderclose);
        writer.writeObjectValue<Campaignactivity>("regardingobjectid_campaignactivity_orderclose", this.regardingobjectid_campaignactivity_orderclose);
        writer.writeObjectValue<Entitlement>("regardingobjectid_entitlement_orderclose", this.regardingobjectid_entitlement_orderclose);
        writer.writeObjectValue<Entitlementtemplate>("regardingobjectid_entitlementtemplate_orderclose", this.regardingobjectid_entitlementtemplate_orderclose);
        writer.writeObjectValue<Incident>("regardingobjectid_incident_orderclose", this.regardingobjectid_incident_orderclose);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle_orderclose", this.regardingobjectid_knowledgearticle_orderclose);
        writer.writeObjectValue<Knowledgebaserecord>("regardingobjectid_knowledgebaserecord_orderclose", this.regardingobjectid_knowledgebaserecord_orderclose);
        writer.writeObjectValue<Lead>("regardingobjectid_lead_orderclose", this.regardingobjectid_lead_orderclose);
        writer.writeObjectValue<Msdyn_customerasset>("regardingobjectid_msdyn_customerasset_orderclose", this.regardingobjectid_msdyn_customerasset_orderclose);
        writer.writeObjectValue<Msdyn_playbookinstance>("regardingobjectid_msdyn_playbookinstance_orderclose", this.regardingobjectid_msdyn_playbookinstance_orderclose);
        writer.writeObjectValue<Interactionforemail>("regardingobjectid_new_interactionforemail_orderclose", this.regardingobjectid_new_interactionforemail_orderclose);
        writer.writeObjectValue<Opportunity>("regardingobjectid_opportunity_orderclose", this.regardingobjectid_opportunity_orderclose);
        writer.writeObjectValue<Site>("regardingobjectid_site_orderclose", this.regardingobjectid_site_orderclose);
        writer.writeNumberValue("revision", this.revision);
        writer.writeObjectValue<Salesorder>("salesorderid", this.salesorderid);
        writer.writeObjectValue<Mailbox>("sendermailboxid_orderclose", this.sendermailboxid_orderclose);
        writer.writeObjectValue<Service>("serviceid_orderclose", this.serviceid_orderclose);
        writer.writeObjectValue<Sla>("sla_activitypointer_sla_orderclose", this.sla_activitypointer_sla_orderclose);
        writer.writeObjectValue<Sla>("slainvokedid_activitypointer_sla_orderclose", this.slainvokedid_activitypointer_sla_orderclose);
        writer.writeStringValue("subcategory", this.subcategory);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid_orderclose", this.transactioncurrencyid_orderclose);
    };
    /**
     * Gets the serviceid_orderclose property value. 
     * @returns a service
     */
    public get serviceid_orderclose() {
        return this._serviceid_orderclose;
    };
    /**
     * Sets the serviceid_orderclose property value. 
     * @param value Value to set for the serviceid_orderclose property.
     */
    public set serviceid_orderclose(value: Service | undefined) {
        this._serviceid_orderclose = value;
    };
    /**
     * Gets the sla_activitypointer_sla_orderclose property value. 
     * @returns a sla
     */
    public get sla_activitypointer_sla_orderclose() {
        return this._sla_activitypointer_sla_orderclose;
    };
    /**
     * Sets the sla_activitypointer_sla_orderclose property value. 
     * @param value Value to set for the sla_activitypointer_sla_orderclose property.
     */
    public set sla_activitypointer_sla_orderclose(value: Sla | undefined) {
        this._sla_activitypointer_sla_orderclose = value;
    };
    /**
     * Gets the slainvokedid_activitypointer_sla_orderclose property value. 
     * @returns a sla
     */
    public get slainvokedid_activitypointer_sla_orderclose() {
        return this._slainvokedid_activitypointer_sla_orderclose;
    };
    /**
     * Sets the slainvokedid_activitypointer_sla_orderclose property value. 
     * @param value Value to set for the slainvokedid_activitypointer_sla_orderclose property.
     */
    public set slainvokedid_activitypointer_sla_orderclose(value: Sla | undefined) {
        this._slainvokedid_activitypointer_sla_orderclose = value;
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
     * Gets the transactioncurrencyid_orderclose property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid_orderclose() {
        return this._transactioncurrencyid_orderclose;
    };
    /**
     * Sets the transactioncurrencyid_orderclose property value. 
     * @param value Value to set for the transactioncurrencyid_orderclose property.
     */
    public set transactioncurrencyid_orderclose(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid_orderclose = value;
    };
}
